import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnDestroy {
  constructor(private router: Router) { }

  goToMain() {
    this.router.navigate(['main']);
  }

  ngOnDestroy(): void {

  }
}
