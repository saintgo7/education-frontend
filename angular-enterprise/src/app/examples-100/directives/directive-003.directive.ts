import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDirective3]'
})
export class Directive3 {
  @Input() appDirective3: string = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = '2px solid green';
  }
}
