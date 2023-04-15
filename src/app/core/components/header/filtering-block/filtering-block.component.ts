import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/youtube/services/data.service';
import { Store } from '@ngrx/store';
import { setSortCriteria } from 'src/app/redux/actions';
import { IState } from 'src/app/redux/reducers';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss'],
  })
export class FilteringBlockComponent implements OnInit {
  public like = false

  public views = false

  public date = false

  public inputValue = ''

  public show = false

  constructor(private data: DataService,
              private store: Store<IState>) {}

  ngOnInit() {
    this.data.showSettingBlock.subscribe((val) => { this.show = val; });
  }

  public sortBy(text: string): void {
    if (text === 'like') {
      this.like = !this.like;
      this.like ? this.store.dispatch(setSortCriteria({ text }))
        : this.store.dispatch(setSortCriteria({ text: 'likeDown' }));
    }
    if (text === 'views') {
      this.views = !this.views;
      this.views ? this.store.dispatch(setSortCriteria({ text }))
        : this.store.dispatch(setSortCriteria({ text: 'viewsDown' }));
    }
    if (text === 'date') {
      this.date = !this.date;
      this.date ? this.store.dispatch(setSortCriteria({ text }))
        : this.store.dispatch(setSortCriteria({ text: 'dateDown' }));
    }
  }

  public filterCards(text: string): void {
    this.data.filterCards(text);
  }
}
