import { Component, OnDestroy, ViewChild } from '@angular/core';
import {
  FormControl, FormGroup, FormGroupDirective, Validators,
} from '@angular/forms';
import { DateValidator } from '../../utils/validator';
import { addCustomCard } from 'src/app/redux/actions';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/redux/reducers';
import { Router } from '@angular/router';

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

  constructor(private store: Store<{ cards:IState }>,  private router:Router) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required, DateValidator()]),
    });
  }

  submit() {
    this.isSubmitted = true;
    if (!this.form.invalid) {
      this.succesSubmit = true;
      this.form.value.id = Date.now()
      this.store.dispatch(addCustomCard({card:this.form.value}));
      setTimeout(() => {
        this.succesSubmit = false;
        this.isSubmitted = false;
        this.form.reset();
        this.formGroupDirective.resetForm();
        this.router.navigate(['main']);
      }, 2000);
    }
  }

  ngOnDestroy(): void {

  }
}
