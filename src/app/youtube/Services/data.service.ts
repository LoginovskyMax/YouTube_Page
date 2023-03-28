import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as responses from '../../../assets/response.json';
import { SearchResponse } from '../models/search-response.model';
import { SearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  resp: SearchResponse = responses

  cardArr: SearchItem[] = this.resp.items

  findingCards: SearchItem[] = []

  data: BehaviorSubject<SearchItem[]> = new BehaviorSubject<SearchItem[]>([])

  sortCriteria: BehaviorSubject<string> = new BehaviorSubject<string>('')

  filterCriteria: BehaviorSubject<string> = new BehaviorSubject<string>('')

  showSettingBlock: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  findCards(text: string) {
    let filteredArr = this.cardArr.filter((card) => card.snippet.title
      .toLowerCase().includes(text.toLowerCase()));
    if (text === '')filteredArr = [];
    this.data.next(filteredArr);
    this.findingCards = this.data.getValue();
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
}
