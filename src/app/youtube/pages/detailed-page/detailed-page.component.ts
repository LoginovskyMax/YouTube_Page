import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'src/app/youtube/services/data.service';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { ICustomCard } from 'src/app/redux/customCards.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
  })
export class DetailedPageComponent implements OnInit {
  public videoData: SearchItem|undefined

  public customVideoData: ICustomCard|undefined

  public time = ''

  public isCustomCard = false

  private id = ''

  constructor(private route: ActivatedRoute,
              private router: Router,
              private data: DataService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    if (this.checkID(this.id)) {
      this.videoData = this.data.getVideoDetails(this.id);
      this.isCustomCard = false;
      if (this.videoData) {
        this.time = new Date(this.videoData?.snippet.publishedAt).toLocaleDateString();
      } else {
        this.router.navigate(['main']);
      }
    } else {
      this.customVideoData = this.data.getCustomVideoDetails(this.id);
      this.isCustomCard = true;
      if (this.customVideoData) {
        this.time = this.customVideoData.date;
      } else {
        this.router.navigate(['main']);
      }
    }
  }

  public goToMain() {
    this.router.navigate(['main']);
  }

  private checkID(text: string) {
    const alphabet = 'qwertyuiopasdfghjklzxcvbnm';
    for (let i = 0; i < text.length; i += 1) {
      if (alphabet.includes(text[i].toLowerCase())) {
        return true;
      }
    }
    return false;
  }
}
