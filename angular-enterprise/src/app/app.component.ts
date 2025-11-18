import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Angular Enterprise Framework</h1>
    <p>Check src/app/examples-100 for 100+ Angular examples</p>
  `,
  styles: [`
    h1 { color: #dd0031; }
  `]
})
export class AppComponent {
  title = 'angular-enterprise';
}
