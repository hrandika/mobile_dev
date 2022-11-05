import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./page/login/login.module').then((file) => file.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./page/home/home.module').then((file) => file.HomeModule),
  },
  {
    path: 'map',
    loadChildren: () =>
      import('./page/map/map.module').then((m) => m.MapModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./page/posts/posts.module').then((m) => m.PostsModule),
  },
  { path: 'profile', loadChildren: () => import('./page/profile/profile.module').then(m => m.ProfileModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
