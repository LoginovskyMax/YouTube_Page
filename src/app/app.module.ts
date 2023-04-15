import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { YoutubeHeadersInterceptor } from './youtube/youtube-headers.interceptor';
import { counterReducer } from './redux/reducers';

@NgModule({
  declarations: [
  AppComponent,
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  CoreModule,
  HttpClientModule,
  BrowserAnimationsModule,
  StoreModule.forRoot({ store: counterReducer })
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: YoutubeHeadersInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  })
export class AppModule { }
