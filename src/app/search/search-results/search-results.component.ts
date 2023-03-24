import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { SearchItem } from '../search-item.model';
import { SearchResponse } from '../search-response.model';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  dataArr:SearchResponse
  constructor(private data:DataService){
    this.dataArr = this.data.getData()
    console.log(this.dataArr.pageInfo);
  }
  ngOnInit(): void {
  }
}
