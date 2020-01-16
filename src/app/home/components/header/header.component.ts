import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-header',
  template: `
    <header class="border-b border-t mb-4 py-2 uppercase">
      {{ display }}
    </header>
  `
})
export class HeaderComponent {
  @Input()
  public display: string;
}
