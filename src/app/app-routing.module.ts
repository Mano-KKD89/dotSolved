import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'login',
    loadChildren: () =>
    import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
    import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'lock',
    loadChildren: () =>
    import('../app/landing/landing.module').then(m => m.LandingModule)
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
