import { Component } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  // template: `
  //   <h2>Single-slot content projection</h2>
  //   <ng-content></ng-content>
  // `
})
export class ContentProjectionComponent {
  isShow: boolean = false;
}
