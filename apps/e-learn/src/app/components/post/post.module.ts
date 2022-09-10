import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  exports: [PostComponent],
  imports: [CommonModule],
})
export class PostModule {}
