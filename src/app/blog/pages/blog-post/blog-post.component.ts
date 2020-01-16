import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { PostModel } from '../../models/post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html'
})
export class BlogPostComponent implements OnInit {
  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(BlogService) private service: BlogService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const postID: number = Number(params.postID);
      const post: PostModel = this.service.getPost(postID);
    });
  }
}
