import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  inputValue = ''

  constructor(private data: DataService) {

  }

  findVideo() {
    this.data.findCards(this.inputValue);
  }
}
