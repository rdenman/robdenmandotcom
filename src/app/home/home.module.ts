import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, WorkDetailComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
