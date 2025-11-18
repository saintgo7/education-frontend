import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDirective5]'
})
export class Directive5 {
  @Input() appDirective5: string = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = '2px solid green';
  }
}
