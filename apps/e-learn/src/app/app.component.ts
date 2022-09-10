import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState } from './shared/states/app/app.state';

@Component({
  selector: 'responsive-inc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-learn';

  @Select(AppState.loading) loading$?: Observable<boolean>;
  @Select(AppState.user) user$?:Observable<string>;
}
