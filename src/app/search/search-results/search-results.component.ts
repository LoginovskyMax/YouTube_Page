import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
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
}
