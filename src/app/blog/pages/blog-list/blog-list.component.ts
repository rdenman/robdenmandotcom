import { Component, Inject, OnInit } from '@angular/core';
import { PostModel } from '../../models/post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
  public posts: PostModel[];

  constructor(@Inject(BlogService) private service: BlogService) {}

  public ngOnInit(): void {
    this.posts = this.service.getPosts();
  }
}
