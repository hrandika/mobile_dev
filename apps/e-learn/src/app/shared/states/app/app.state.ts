import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ChangeLoading, ChangeUser } from './app.actions';

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
  @Selector() static loading(state: AppStateModel) {
    return state.loading;
  }

  @Selector() static user(state: AppStateModel) {
    return state.user;
  }

  @Action(ChangeUser)
  changeUser(ctx: StateContext<AppStateModel>, action: ChangeUser) {
    ctx.patchState({ user: action.user, loading: true });
    setTimeout(() => {
      ctx.dispatch(new ChangeLoading(false))
    }, 2000);
  }

  @Action(ChangeLoading)
  changLoading(ctx: StateContext<AppStateModel>, action: ChangeLoading) {
    ctx.patchState({ loading: action.loading });
  }
}
