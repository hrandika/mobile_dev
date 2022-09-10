import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';

export interface AppStateModel {
  loading: boolean;
  user?: string;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    loading: false,
    user: 'admin@whatever.com',
  },
})
@Injectable()
export class AppState {
  @Selector() static loading(statte: AppStateModel) {
    return statte.loading;
  }

  @Selector() static user(state: AppStateModel) {
    return state.user;
  }
}
