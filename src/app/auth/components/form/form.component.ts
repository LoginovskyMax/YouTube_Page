import {
  Component, Input, OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  })
export class FormComponent implements OnInit {
  public form: FormGroup;

  public isSubmitted = false;

  public hide = true;

  @Input() create = false

  constructor(private router: Router,
              private auth: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/(?=.*\d)(?=.*[@!$#?&-])(?=.*[a-z])(?=.*[A-Z]).{8,}/)]),
    });
  }

  public submit() {
    this.isSubmitted = true;
    if (!this.form.invalid) {
      const obj = {
        name: this.form.controls['email'].value,
        password: this.form.controls['password'].value,
      };
      localStorage.setItem('user', JSON.stringify(obj));
      this.auth.logIn(this.form.controls['email'].value);
      this.router.navigate(['main']);
    }
  }
}
