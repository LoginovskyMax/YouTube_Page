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

  findCards(text: string) {
    const filteredArr = this.cardArr.filter((card) => card.snippet.title.includes(text));
    this.data.next(filteredArr);
  }

  constructor() { }
}
