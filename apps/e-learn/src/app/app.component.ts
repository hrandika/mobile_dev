import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChangeUser } from './shared/states/app/app.actions';
import { AppState } from './shared/states/app/app.state';

@Component({
  selector: 'responsive-inc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(AppState.loading) loading$?: Observable<boolean>;
  @Select(AppState.user) user$?: Observable<string>;

  constructor(private store: Store) {}

  changeToAdmin() {
    this.store.dispatch(new ChangeUser('admin@localhost.com'));
  }
}
