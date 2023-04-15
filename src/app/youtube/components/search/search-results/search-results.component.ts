import { Component, OnInit } from '@angular/core';
import { ICustomCard } from 'src/app/redux/customCards.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/redux/reducers';
import { SearchItem } from '../../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  })
export class SearchResultsComponent implements OnInit {
  public dataArr: SearchItem[] = []

  public customArr: Observable<ICustomCard[]>

  public sortCriteria = ''

  constructor(private store: Store<{store: IState}>) {}

  ngOnInit() {
    this.customArr = this.store.select((state) => state.store.customCards);
    this.store.select((state) => state.store.loadCards)
      .subscribe((data) => { this.dataArr = data; });
    this.store.select((state) => state.store.sortCriteria)
      .subscribe((data) => { this.sortCriteria = data; });
  }
}
