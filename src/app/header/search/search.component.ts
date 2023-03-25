import { Component, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  inputValue = ''

  constructor(private data: DataService) {

  }

  findVideo() {
    this.data.findCards(this.inputValue);
  }

  ngOnDestroy(): void {

  }
}
