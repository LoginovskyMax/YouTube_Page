import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/youtube/Services/data.service';
import { SearchItem } from '../../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  dataArr: SearchItem[] = []

  sortCriteria = ''

  constructor(private data: DataService) {
    this.data.data.subscribe((val) => {
      this.dataArr = val;
    });
    this.data.sortCriteria.subscribe((val) => {
      this.sortCriteria = val;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
