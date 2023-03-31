import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    StatisticsComponent,
    ColorDirective,
  ],
  imports: [
    CommonModule,
    MaterialUIModule,
  ],
  exports: [
    StatisticsComponent,
    ColorDirective,
  ],
})
export class SharedModule { }
