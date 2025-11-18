import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-34',
  template: `
    <div class="component-34">
      <h3>{{ title }}</h3>
      <p>Count: {{ count }}</p>
      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  `,
  styles: [`
    .component-34 {
      padding: 1rem;
      border: 1px solid #ccc;
    }
  `]
})
export class Component34 {
  @Input() title = 'Component 34';
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
