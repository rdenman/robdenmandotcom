import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostModel } from '../../models/post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  private readonly postsBase: string = './assets/posts/';
  public postLocation: string;

  private isHighlighted: boolean = false;

  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(BlogService) private service: BlogService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const postID: number = Number(params.id);
      const post: PostModel = this.service.getPost(postID);
      this.postLocation = `${this.postsBase}${post.file}`;
    });
  }
}
