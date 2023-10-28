import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated-encapsulation',
  template: `<p>Using Emulator</p>`,
  styles: ['p { color:red}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedEncapsulationComponent {

}
