import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchComponent } from './header/search/search.component';
import { LoginInfoComponent } from './header/login-info/login-info.component';
import { SettingsButtonComponent } from './header/settings-button/settings-button.component';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { FilteringBlockComponent } from './filtering-block/filtering-block.component';
import { SortingPipe } from './sorting.pipe';
import { ColorDirective } from './color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    LogoComponent,
    SearchComponent,
    LoginInfoComponent,
    SettingsButtonComponent,
    FilteringBlockComponent,
    SortingPipe,
    ColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialUIModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
