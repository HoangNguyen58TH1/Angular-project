import { Component } from '@angular/core';

@Component({
  selector: 'app-class-and-style-binding',
  templateUrl: './class-and-style-binding.component.html',
  styleUrls: ['./class-and-style-binding.component.scss']
})
export class ClassAndStyleBindingComponent {
  isBold: boolean = true; // 'any_value'
  // else false == null == undefine == ''

  textRed: string = "text-red bold"; // multi
  textRedUnderline: Array<string> = ['text-red', 'bold', 'text-underline']; //array
  bgColor = 'yellow'; // single style
  multiStyle = 'color: pink; font-size: 32px'

  onClick() {
    console.log('Event Binding - Click');
  }
}
