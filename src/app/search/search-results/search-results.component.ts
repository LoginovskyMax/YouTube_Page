import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { SearchItem } from '../search-item.model';
import { SearchResponse } from '../search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  dataArr: SearchItem[] = []
  sortCriteria:string = ''

  constructor(private data: DataService) {
    this.data.data.subscribe((data) => {
      this.dataArr = data;
    });
    this.data.sortCriteria.subscribe((data) => {
      this.sortCriteria = data;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }
}
