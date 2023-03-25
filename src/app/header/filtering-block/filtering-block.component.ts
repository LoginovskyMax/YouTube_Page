import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss'],
})
export class FilteringBlockComponent implements OnDestroy {
  panelState = false

  like = false

  views = false

  date = false

  inputValue = ''

  show = false

  constructor(private data: DataService) {
    this.data.showSettingBlock.subscribe((val) => { this.show = val; });
  }

  sortBy(text: string) {
    if (text === 'like') {
      this.like = !this.like;
      this.like ? this.data.sortCards(text)
        : this.data.sortCards('likeDown');
    }
    if (text === 'views') {
      this.views = !this.views;
      this.views ? this.data.sortCards(text)
        : this.data.sortCards('viewsDown');
    }
    if (text === 'date') {
      this.date = !this.date;
      this.date ? this.data.sortCards(text)
        : this.data.sortCards('dateDown');
    }
  }

  filterCards(text: string) {
    this.data.filterCards(text);
  }

  ngOnDestroy(): void {

  }
}
