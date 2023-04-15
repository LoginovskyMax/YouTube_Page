import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
  })
export class AuthService {
  public authUser: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor() {
    if (localStorage.getItem('user')) {
      const user = localStorage.getItem('user');
      if (user !== null) {
        this.authUser.next(JSON.parse(user).name);
      }
    }
  }

  public logIn(name: string) {
    this.authUser.next(name);
  }

  public isLogIn() {
    return this.authUser.value;
  }

  public logOut() {
    localStorage.removeItem('user');
    this.authUser.next('');
  }
}
