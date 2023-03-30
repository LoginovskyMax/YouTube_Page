import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MaterialUIModule } from '../shared/material-ui/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterAuthModule } from './router-auth.module';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    AuthPageComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MaterialUIModule,
    FormsModule,
    RouterAuthModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
