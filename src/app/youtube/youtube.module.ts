import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SortingPipe } from './pipes/sorting.pipe';
import { MaterialUIModule } from '../shared/material-ui/material-ui.module';
import { YouTubeRoutingModule } from './youtube-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomCardComponent } from './components/custom-card/custom-card.component';

@NgModule({
  declarations: [
  SearchResultsComponent,
  SearchItemComponent,
  SortingPipe,
  CustomCardComponent,
  ],
  imports: [
  CommonModule,
  MaterialUIModule,
  FormsModule,
  YouTubeRoutingModule,
  SharedModule,
  ],
  exports: [
  SearchResultsComponent,
  ],
  })
export class YoutubeModule { }
