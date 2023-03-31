import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'src/app/youtube/Services/data.service';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  id = ''

  videoData: SearchItem|undefined

  time = ''

  constructor(private route: ActivatedRoute,
              private router: Router,
              private data: DataService) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.videoData = this.data.getVideoDetails(this.id);
    if (this.videoData) {
      this.time = new Date(this.videoData?.snippet.publishedAt).toLocaleDateString();
    } else {
      this.router.navigate(['main']);
    }
  }

  ngOnInit(): void {
  }

  goToMain() {
    this.router.navigate(['main']);
  }
}
