import { Component, OnDestroy, ViewChild } from '@angular/core';
import {
  FormControl, FormGroup, FormGroupDirective, Validators,
} from '@angular/forms';
import { DateValidator } from '../../utils/validator';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnDestroy {
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  // eslint-disable-next-line no-useless-escape
  URLRegex = new RegExp('^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*')

  form: FormGroup;

  isSubmitted = false;

  succesSubmit = false

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [Validators.required, Validators.pattern(this.URLRegex)]),
      link: new FormControl('', [Validators.required, Validators.pattern(this.URLRegex)]),
      date: new FormControl('', [Validators.required, DateValidator()]),
    });
  }

  submit() {
    this.isSubmitted = true;
    if (!this.form.invalid) {
      this.succesSubmit = true;
      setTimeout(() => {
        this.succesSubmit = false;
        this.isSubmitted = false;
        this.form.reset();
        this.formGroupDirective.resetForm();
      }, 2000);
    }
  }

  ngOnDestroy(): void {

  }
}
