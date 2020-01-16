import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [BlogListComponent, BlogPostComponent],
  imports: [BlogRoutingModule, CommonModule],
  providers: [BlogService]
})
export class BlogModule {}
