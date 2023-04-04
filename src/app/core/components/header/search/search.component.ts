import { Component, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/youtube/Services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  constructor(private data: DataService) {
  }

  findVideo(event: KeyboardEvent) {
    const text = (event.target as HTMLInputElement).value;
    if (text.length >= 2) {
      this.data.findCards(text);
    }
  }

  ngOnDestroy(): void {

  }
}
