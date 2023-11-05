import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
})
export class ItemOutputComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    if (value !== '') {
      this.newItemEvent.emit(value);
    }
  }
}
