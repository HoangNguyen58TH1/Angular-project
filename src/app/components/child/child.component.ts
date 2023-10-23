import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, ViewChild, ContentChild, ElementRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() userName = '';
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

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

  ngOnInit(): void {
    console.log('ngOnInit from the child component');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck triggered');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - contentWrapper', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered');
  }
}
