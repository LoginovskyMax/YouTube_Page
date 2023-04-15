import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialUIModule } from '../shared/material-ui/material-ui.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CardFormComponent } from './components/card-form/card-form.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

@NgModule({
  declarations: [
  CardFormComponent,
  AdminPageComponent,
  ],
  imports: [
  CommonModule,
  MaterialUIModule,
  FormsModule,
  SharedModule,
  ReactiveFormsModule,
  AdminRoutingModule,
  ],
  exports: [
  ],
  })
export class AdminModule { }
