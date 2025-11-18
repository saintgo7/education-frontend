import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDirective4]'
})
export class Directive4 {
  @Input() appDirective4: string = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = '2px solid green';
  }
}
