import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit, OnDestroy {
  @Input() card: SearchItem|null = null

  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
