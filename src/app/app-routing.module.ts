import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { DetailedPageComponent } from './core/pages/detailed-page/detailed-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'video/:id', component: DetailedPageComponent},
  { path: 'main', loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule) },
  // { path: 'video/:id', loadChildren: () => import('./pages/add-vacation/add-vacation.module').then((m) => m.AddVacationModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
