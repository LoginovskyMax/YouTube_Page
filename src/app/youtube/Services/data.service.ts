import { Injectable } from '@angular/core';
import {
  BehaviorSubject, Observable, map, Subject, debounceTime,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchResponse, FirstSearchResponse } from '../models/search-response.model';
import { SearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  findingCards: SearchItem[] = []

  data: BehaviorSubject<SearchItem[]> = new BehaviorSubject<SearchItem[]>([])

  sortCriteria: BehaviorSubject<string> = new BehaviorSubject<string>('')

  filterCriteria: BehaviorSubject<string> = new BehaviorSubject<string>('')

  showSettingBlock: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  searchType = '&type=video&part=snippet&maxResults=5&q='

  debounceSub = new Subject<string>()

  constructor(private http: HttpClient) {}

  getVideo(id: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`videos&id=${id}&part=snippet,statistics`);
  }

  sendSearchResponse(text: string) {
    return this.http.get<FirstSearchResponse>(`search${this.searchType}${text}`);
  }

  findCards(text: string) {
    let filteredArr: SearchItem[] = [];
    this.debounceSub.next(text);
    this.debounceSub.pipe(
      debounceTime(1000), map((searchText) => this.sendSearchResponse(searchText)),
    )
      .subscribe((result) => {
        result.subscribe((response) => {
          const idArr = response.items.map((item) => item.id.videoId).join(',');
          this.getVideo(idArr)
            .subscribe((data) => {
              filteredArr = data.items;
              if (text === '')filteredArr = [];
              this.data.next(filteredArr);
              this.findingCards = this.data.getValue();
            });
        });
      });
  }

  sortCards(text: string) {
    this.sortCriteria.next(text);
  }

  filterCards(text: string) {
    let filteredArr = this.findingCards
      .filter((card) => card.snippet.title.toLowerCase()
        .includes(text.toLowerCase()));
    if (text === '')filteredArr = this.findingCards;
    this.data.next(filteredArr);
  }

  showSettings() {
    this.showSettingBlock.next(!this.showSettingBlock.getValue());
  }

  getVideoDetails(id: string) {
    const video = this.findingCards.find((card) => card.id === id);
    return video;
  }
}
