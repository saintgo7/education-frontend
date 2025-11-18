import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-23',
  template: `
    <div class="component-23">
      <h3>{{ title }}</h3>
      <p>Count: {{ count }}</p>
      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  `,
  styles: [`
    .component-23 {
      padding: 1rem;
      border: 1px solid #ccc;
    }
  `]
})
export class Component23 {
  @Input() title = 'Component 23';
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
