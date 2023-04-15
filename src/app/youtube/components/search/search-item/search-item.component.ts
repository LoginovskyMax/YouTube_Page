import {
  Component, Input, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { SearchItem } from '../../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  })
export class SearchItemComponent implements OnInit {
  @Input() card: SearchItem|null = null

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  public goToDetailed(id: string|undefined): void {
    if (id) this.router.navigate([`video/${id}`]);
  }
}
