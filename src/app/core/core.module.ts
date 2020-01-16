import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavHeaderComponent } from './nav-header/nav-header.component';

@NgModule({
  declarations: [NavHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavHeaderComponent]
})
export class CoreModule {}
