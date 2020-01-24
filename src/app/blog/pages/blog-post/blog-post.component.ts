import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostModel } from '../../models/post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, OnDestroy {
  @ViewChild('postContainer', { static: false })
  public postContainer: ElementRef;

  private readonly postsBase: string = './assets/posts/';
  public postLocation: string;

  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(BlogService) private service: BlogService,
    @Inject(ElementRef) private elementRef: ElementRef
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const postID: number = Number(params.id);
      const post: PostModel = this.service.getPost(postID);
      this.postLocation = `${this.postsBase}${post.file}`;
    });
  }

  public ngOnDestroy(): void {
    // manually remove element from the DOM
    this.elementRef.nativeElement.remove();
  }
}
