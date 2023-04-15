import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/redux/reducers';
import { DataService } from 'src/app/youtube/Services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  constructor(private data: DataService, private store: Store<{ cards:IState }>) {
  }

  findVideo(event: KeyboardEvent) {
    const searchText = (event.target as HTMLInputElement).value;
    if (searchText.length > 2) {
      this.data.findCards(searchText);
    }
  }

  ngOnDestroy(): void {

  }
}
