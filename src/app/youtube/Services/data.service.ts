import { Injectable } from '@angular/core';
import { BehaviorSubject , from, mergeMap, switchMap, tap ,Observable, debounce, interval, map, Subject, debounceTime} from 'rxjs';
import * as responses from '../../../assets/response.json';
import { SearchResponse , FirstSearchResponse} from '../models/search-response.model';
import { SearchItem } from '../models/search-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  findingCards: SearchItem[] = []

  data: BehaviorSubject<SearchItem[]> = new BehaviorSubject<SearchItem[]>([])

  sortCriteria: BehaviorSubject<string> = new BehaviorSubject<string>('')

  filterCriteria: BehaviorSubject<string> = new BehaviorSubject<string>('')

  showSettingBlock: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  apiKey = '?key=AIzaSyBApfjAX9A8LN7R7t9LrQ3uEYuZjx4k7AY'

  searchType = '&type=video&part=snippet&maxResults=5&q='

  host = 'https://www.googleapis.com/youtube/v3/'

  debounceSub = new Subject<string>()

  constructor(private http: HttpClient){}

  getVideo(id:string): Observable<SearchResponse>{ 
    return this.http.get<SearchResponse>(this.host + 'videos' + this.apiKey + `&id=${id}&part=snippet,statistics`); 
  }

  sendSearchResponse(text: string){
    return this.http.get<FirstSearchResponse>(this.host + 'search' + this.apiKey + this.searchType + text)
  }

   findCards(text: string) {
    let filteredArr:SearchItem[] = []
    this.debounceSub.next(text)
    this.debounceSub.pipe(
      debounceTime(1000), map(searchText => this.sendSearchResponse(searchText)))
      .subscribe(result => { 
      result.subscribe(response =>{
      let idArr =  response.items.map(item=>item.id.videoId).join(',')
      this.getVideo(idArr)
      .subscribe(data=>{
        filteredArr = data.items
        if (text === '')filteredArr = []; 
        this.data.next(filteredArr);
        this.findingCards = this.data.getValue();
      })
   })
  })
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
