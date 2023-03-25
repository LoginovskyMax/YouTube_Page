import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss']
})
export class FilteringBlockComponent implements OnInit {
  panelState = false
  like = false
  views = false
  date = false
  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  sortBy(text:string){
     if(text === 'like'){
      this.like = !this.like
      this.like ? this.data.sortCards(text) :
      this.data.sortCards('likeDown')
    }
    if(text === 'views'){
      this.views = !this.views
      this.views ? this.data.sortCards(text) :
      this.data.sortCards('viewsDown')
    }
    if(text === 'date'){
      this.date = !this.date
      this.date ? this.data.sortCards(text) :
      this.data.sortCards('dateDown')
    }
     
  }

}
