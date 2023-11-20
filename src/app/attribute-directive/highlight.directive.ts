import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // standalone: true,
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() defaultColor = '';

  constructor(private el: ElementRef) {}

  // hover
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }

  // hover leave
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('red');
  // }

  // input 2 value
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
