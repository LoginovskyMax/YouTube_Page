import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { DetailedPageComponent } from './youtube/pages/detailed-page/detailed-page.component';
import { AuthGuardService } from './auth/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'video/:id', component: DetailedPageComponent, canActivate: [AuthGuardService] },
  {
    path: 'main',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-page/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuardService],
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })
export class AppRoutingModule { }
