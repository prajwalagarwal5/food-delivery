import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from './services/route-guard/route-guard';

const routes: Routes = [

  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
