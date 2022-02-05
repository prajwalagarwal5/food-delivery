import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from './shared/route-guard/route-guard';

const routes: Routes = [

  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    data: { showHeaderForAdmin: false, showHeaderForUser:false }
  },
  {
    path: 'restraunt', loadChildren: () => import('./restraunt/restraunt.module').then(m => m.RestrauntModule),
    data: { showHeaderForAdmin: true, showHeaderForUser:false },
    canActivate: [RouteGuard]

  },
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
