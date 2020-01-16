import { Injectable } from '@angular/core';
import * as json from '../../../assets/posts/posts.json';
import { PostModel } from '../models/post.js';

@Injectable()
export class BlogService {
  private _posts: PostModel[];

  constructor() {
    this._posts = json.posts.map((postJSON: any) => {
      postJSON.created = new Date(postJSON.created);
      if (postJSON.updated) {
        postJSON.updated = new Date(postJSON.updated);
      }
      return postJSON;
    });
  }

  public getPosts(): PostModel[] {
    return this._posts;
  }

  public getPost(id: number): PostModel {
    return this._posts.find((post: PostModel) => post.id === id);
  }
}
