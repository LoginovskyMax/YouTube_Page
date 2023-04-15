import { Component } from '@angular/core';
import { DataService } from 'src/app/youtube/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  })
export class SearchComponent {
  constructor(private data: DataService) {}

  public findVideo(event: KeyboardEvent): void {
    const searchText = (event.target as HTMLInputElement).value;
    if (searchText.length >= 2) {
      this.data.findCards(searchText);
    }
  }
}
