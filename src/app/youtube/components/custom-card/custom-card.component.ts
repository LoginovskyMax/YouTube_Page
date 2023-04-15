import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomCard } from 'src/app/redux/customCards.model';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent {
  @Input() card: ICustomCard

  constructor(private router:Router){}

  goToDetailed(id: number) {
    console.log(id);
    this.router.navigate([`video/${id}`]);
  }
}
