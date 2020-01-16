import { Component, Input } from '@angular/core';
import { WorkDetailModel } from '../../models/work-detail';

@Component({
  selector: 'home-work-detail',
  templateUrl: './work-detail.component.html'
})
export class WorkDetailComponent {
  @Input()
  public detail: WorkDetailModel;
}
