import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-encapsulation',
  template: `<p>I am encapsulated inside a Shadow DOM ViewEncapsulation.ShadowDom</p>`,
  styles: ['p { color:orange}'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomEncapsulationComponent {

}
