import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  inputValue = ''

  constructor(private data: DataService) {

  }

  ngOnInit(): void {
  }

  findVideo() {
    this.data.findCards(this.inputValue);
  }

  handleInp(e: KeyboardEvent) {
    console.log((e.target as HTMLInputElement).value);
  }
}
