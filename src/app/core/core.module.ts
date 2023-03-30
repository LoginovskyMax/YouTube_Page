import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LoginInfoComponent } from './components/header/login-info/login-info.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchComponent } from './components/header/search/search.component';
import { FilteringBlockComponent } from './components/header/filtering-block/filtering-block.component';
import { MaterialUIModule } from '../shared/material-ui/material-ui.module';
import { SharedModule } from '../shared/shared.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginInfoComponent,
    SettingsButtonComponent,
    LogoComponent,
    SearchComponent,
    FilteringBlockComponent,
    NotFoundComponent,
    DetailedPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialUIModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
