import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-30',
  template: `
    <div class="component-30">
      <h3>{{ title }}</h3>
      <p>Count: {{ count }}</p>
      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  `,
  styles: [`
    .component-30 {
      padding: 1rem;
      border: 1px solid #ccc;
    }
  `]
})
export class Component30 {
  @Input() title = 'Component 30';
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
