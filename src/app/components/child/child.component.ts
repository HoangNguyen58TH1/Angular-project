import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() userName = '';

  ngOnInit(): void {
    console.log('ngOnInit from the child component');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered', changes);

    if (!changes['userName'].isFirstChange()){
      if (changes['userName'].currentValue === "Chris") {
         this.userName = 'Hello ' + this.userName
      } else {
         this.userName = changes['userName'].previousValue
      }
   }
  } 
}
