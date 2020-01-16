import { Component } from '@angular/core';

// TODO should live elsewhere
interface NavItem {
  display: string;
  path: string;
}

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html'
})
export class NavHeaderComponent {
  // TODO should read these in from somewhere
  public items: NavItem[] = [
    {
      display: 'Home',
      path: '/'
    },
    {
      display: 'Blog',
      path: '/blog'
    }
  ];
}
