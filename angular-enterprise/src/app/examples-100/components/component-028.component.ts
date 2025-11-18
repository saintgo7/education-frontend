import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-28',
  template: `
    <div class="component-28">
      <h3>{{ title }}</h3>
      <p>Count: {{ count }}</p>
      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  `,
  styles: [`
    .component-28 {
      padding: 1rem;
      border: 1px solid #ccc;
    }
  `]
})
export class Component28 {
  @Input() title = 'Component 28';
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChange.emit(this.count);
  }
}
