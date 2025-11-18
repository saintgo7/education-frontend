import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1 {
  @Input() appDirective1: string = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = '2px solid green';
  }
}
