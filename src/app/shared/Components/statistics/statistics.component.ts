import { Component, Input, OnDestroy } from '@angular/core';
import { Statistics } from '../../models/statistics'; 

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnDestroy {
  @Input() statistics:Statistics|undefined = undefined
  ngOnDestroy(): void {
  }
}
