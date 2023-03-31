import {
  Component, Input, OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnDestroy {
  form: FormGroup;

  hide = true;

  @Input() create = false

  constructor(private router: Router,
              private auth: AuthService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(4)]),
    });
  }

  submit() {
    const obj = {
      name: this.form.controls['name'].value,
      password: this.form.controls['password'].value,
    };
    localStorage.setItem('user', JSON.stringify(obj));
    this.auth.logIn(this.form.controls['name'].value);
    this.router.navigate(['main']);
  }

  ngOnDestroy(): void {

  }
}
