import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChangeUser } from '../../shared/states/app/app.actions';
import { AppState } from '../../shared/states/app/app.state';
import { Post, PostsService } from './posts.service';

@Component({
  selector: 'responsive-inc-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  @Select(AppState.user) user$?: Observable<string>;

  public post$: Observable<Post[]>;

  constructor(private postsService: PostsService, private store: Store) {
    this.post$ = this.postsService.getPosts();
  }

  changeUser() {
   this.store.dispatch(new ChangeUser("post@whatevet.com"));
  }
}
