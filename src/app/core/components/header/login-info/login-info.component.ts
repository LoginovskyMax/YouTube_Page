import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
  })
export class LoginInfoComponent implements OnInit {
  public userName = ''

  constructor(private router: Router,
              private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.authUser.subscribe((name) => { this.userName = name; });
  }

  public goToAuth(): void {
    if (this.userName) {
      this.auth.logOut();
      this.router.navigate(['auth']);
    } else {
      this.router.navigate(['auth']);
    }
  }

  public goToCreate(): void {
    this.router.navigate(['admin']);
  }
}
