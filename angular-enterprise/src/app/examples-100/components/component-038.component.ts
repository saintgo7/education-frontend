import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-38',
  template: `
    <div class="component-38">
      <h3>{{ title }}</h3>
      <p>Count: {{ count }}</p>
      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  `,
  styles: [`
    .component-38 {
      padding: 1rem;
      border: 1px solid #ccc;
    }
  `]
})
export class Component38 {
  @Input() title = 'Component 38';
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
