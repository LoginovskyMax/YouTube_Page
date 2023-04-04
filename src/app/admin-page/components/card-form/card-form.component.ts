import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnDestroy {
  form: FormGroup;

  isSubmitted = false;

  constructor(private router: Router) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      img: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    this.isSubmitted = true;
    if (!this.form.invalid) {
      const obj = {
        name: this.form.controls['email'].value,
        password: this.form.controls['password'].value,
      };
      this.router.navigate(['main']);
    }
  }

  ngOnDestroy(): void {

  }
}
