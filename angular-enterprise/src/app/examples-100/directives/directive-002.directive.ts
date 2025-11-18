import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDirective2]'
})
export class Directive2 {
  @Input() appDirective2: string = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = '2px solid green';
  }
}
