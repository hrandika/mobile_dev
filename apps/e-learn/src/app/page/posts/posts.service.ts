import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    ).pipe();
  }
}
