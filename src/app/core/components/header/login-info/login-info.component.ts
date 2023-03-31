import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent implements OnDestroy {
  userName = ''

  constructor(private router: Router,
                private auth: AuthService) {
    this.auth.authUser.subscribe((name) => { this.userName = name; });
  }

  goToAuth() {
    if (this.userName) {
      this.auth.logOut();
      this.router.navigate(['auth']);
    } else {
      this.router.navigate(['auth']);
    }
  }

  ngOnDestroy(): void {
  }
}
