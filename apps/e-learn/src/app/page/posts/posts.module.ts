import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { MatCardModule} from '@angular/material/card'
import { PostModule } from '../../components/post/post.module';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatButtonModule,
    MatCardModule,
    PostModule,
  ]
})
export class PostsModule { }
