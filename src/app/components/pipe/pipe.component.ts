import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
})
export class PipeComponent {
  birthday: Date = new Date(2023, 10, 18);
  price: number = 1000;
}
