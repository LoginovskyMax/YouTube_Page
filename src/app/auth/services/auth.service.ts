import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUser: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor() {
    if (localStorage.getItem('user')) {
      const user = localStorage.getItem('user');
      if (user !== null) {
        this.authUser.next(JSON.parse(user).name);
      }
    }
  }

  logIn(name: string) {
    this.authUser.next(name);
  }

  logOut() {
    localStorage.removeItem('user');
    this.authUser.next('');
  }
}
