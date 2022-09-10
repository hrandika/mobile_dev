import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { MatCardModule} from '@angular/material/card'
import { PostModule } from '../../components/post/post.module';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatCardModule,
    PostModule
  ]
})
export class PostsModule { }
