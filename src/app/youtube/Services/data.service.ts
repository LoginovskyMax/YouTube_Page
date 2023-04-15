import { Injectable } from '@angular/core';
import {
  BehaviorSubject, Observable, map, Subject, debounceTime,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { loadVideos, setFilteredVideos } from 'src/app/redux/actions';
import { IState } from 'src/app/redux/reducers';
import { ICustomCard } from 'src/app/redux/customCards.model';
import { SearchResponse, FirstSearchResponse } from '../models/search-response.model';
import { SearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
  })
export class DataService {
  public findingCards: SearchItem[] = []

  public filterCriteria: BehaviorSubject<string> = new BehaviorSubject<string>('')

  public showSettingBlock: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  private searchType = '&type=video&part=snippet&maxResults=5&q='

  private debounceSub = new Subject<string>()

  constructor(private http: HttpClient, private store: Store<{store: IState}>) {}

  public findCards(text: string): void {
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
              this.store.dispatch(loadVideos({ response: filteredArr }));
              this.findingCards = filteredArr;
            });
        });
      });
  }

  public filterCards(text: string): void {
    let filteredArr = this.findingCards
      .filter((card) => card.snippet.title.toLowerCase()
        .includes(text.toLowerCase()));
    if (text === '')filteredArr = this.findingCards;
    this.store.dispatch(setFilteredVideos({ filteredArr }));
  }

  public showSettings(): void {
    this.showSettingBlock.next(!this.showSettingBlock.getValue());
  }

  public getVideoDetails(id: string): SearchItem | undefined {
    const video = this.findingCards.find((card) => card.id === id);
    return video;
  }

  public getCustomVideoDetails(id: string): ICustomCard | undefined {
    let video: undefined|ICustomCard;
    this.store.select((state) => state.store.customCards)
      .subscribe((data) => {
        video = data.find((card) => card.id.toString() === id);
      });
    return video;
  }

  private getVideo(id: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`videos&id=${id}&part=snippet,statistics`);
  }

  private sendSearchResponse(text: string): Observable<FirstSearchResponse> {
    return this.http.get<FirstSearchResponse>(`search${this.searchType}${text}`);
  }
}
