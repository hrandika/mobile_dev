import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'responsive-inc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() title?: string;
  @Input() xIn?:string;
}
