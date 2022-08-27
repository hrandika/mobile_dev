import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./page/home/home.module').then((file) => file.HomeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./page/login/login.module').then((file) => file.LoginModule),
  },
  { path: 'map', loadChildren: () => import('./page/map/map.module').then(m => m.MapModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
