import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { StatisticsComponent } from './Components/statistics/statistics.component';

@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [ 
    CommonModule,
    MaterialUIModule
  ],
  exports:[
    StatisticsComponent
  ]
})
export class SharedModule { }