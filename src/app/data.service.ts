import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as responses from '../assets/response.json';
import { SearchResponse } from './search/search-response.model';
import { SearchItem } from './search/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  resp: SearchResponse = responses

  cardArr: SearchItem[] = this.resp.items

  data: BehaviorSubject<SearchItem[]> = new BehaviorSubject<SearchItem[]>([])

  sortCriteria: BehaviorSubject<string> = new BehaviorSubject<string>('')

  findCards(text: string) {
    let filteredArr = this.cardArr.filter((card) => card.snippet.title.toLowerCase().includes(text.toLowerCase()));
    if(text === '')filteredArr = []
    this.data.next(filteredArr);
  }

  sortCards(text:string){
    this.sortCriteria.next(text);
  }

  constructor() { }
}
