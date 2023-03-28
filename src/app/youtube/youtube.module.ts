import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SortingPipe } from './Pipes/sorting.pipe';
import { ColorDirective } from './Directives/color.directive'; 
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { FormsModule } from '@angular/forms';
import { YouTubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    SortingPipe,
    ColorDirective
  ],
  imports: [
    CommonModule,
    MaterialUIModule,
    FormsModule,
    YouTubeRoutingModule
  ],
  exports:[
    SearchResultsComponent
  ]  
})
export class YoutubeModule { }
