import { Component, Input, OnInit } from '@angular/core';
import { Statistics } from '../../models/statistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  })
export class StatisticsComponent implements OnInit {
  @Input() statistics: Statistics|undefined = undefined

  private nullStatisticks = {
    viewCount: '0',
    likeCount: '0',
    dislikeCount: '0',
    favoriteCount: '0',
    commentCount: '0',
  }

  ngOnInit() {
    if (!this.statistics) {
      this.statistics = this.nullStatisticks;
    }
  }
}
