import {
  Component, Input, OnChanges, OnDestroy,
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
  @Input() create = false

  constructor(private router: Router,
              private auth:AuthService) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  submit() {
     let obj = {
      name: this.form.controls['name'].value,
      password: this.form.controls['password'].value,
     }
     localStorage.setItem('user', JSON.stringify(obj))
     this.auth.logIn(this.form.controls['name'].value)
     this.router.navigate([`main`])
  }

  ngOnDestroy(): void {
    
  }
}
