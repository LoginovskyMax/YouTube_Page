import { Injectable } from '@angular/core';
import { BehaviorSubject , from, mergeMap, switchMap, tap ,Observable} from 'rxjs';
import * as responses from '../../../assets/response.json';
import { SearchResponse , FirstSearchResponse} from '../models/search-response.model';
import { SearchItem } from '../models/search-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  resp = responses

  cardArr: SearchItem[] = this.resp.items

  findingCards: SearchItem[] = []

  data: BehaviorSubject<SearchItem[]> = new BehaviorSubject<SearchItem[]>([])

  sortCriteria: BehaviorSubject<string> = new BehaviorSubject<string>('')

  filterCriteria: BehaviorSubject<string> = new BehaviorSubject<string>('')

  showSettingBlock: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  apiKey = '?key=AIzaSyBApfjAX9A8LN7R7t9LrQ3uEYuZjx4k7AY'
  searchType = '&type=video&part=snippet&maxResults=5&q='
  videoType = '&id=${}=snippet,statistics'
  host = 'https://www.googleapis.com/youtube/v3/'
  other = `https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics`
  constructor(private http: HttpClient){}

  getVideo(id:string): Observable<SearchResponse>{ 
    return this.http.get<SearchResponse>(this.host + 'videos' + this.apiKey + `&id=${id}&part=snippet,statistics`); 
  }

   findCards(text: string) {
    let filteredArr:SearchItem[] = []
    this.http.get<FirstSearchResponse>(this.host + 'search' + this.apiKey + this.searchType + text)
    .subscribe(response => { 
      let idArr =  response.items.map(item=>item.id.videoId).join(',')
      this.getVideo(idArr)
      .subscribe(data=>{
        filteredArr = data.items
        if (text === '')filteredArr = []; 
        this.data.next(filteredArr);
        this.findingCards = this.data.getValue();
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
