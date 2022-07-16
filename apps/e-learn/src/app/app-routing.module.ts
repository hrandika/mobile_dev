import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./page/home/home.module').then((file) => file.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./page/login/login.module').then((file) => file.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
