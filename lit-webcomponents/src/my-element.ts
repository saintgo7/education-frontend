import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: String }) name = 'Lit';

  static styles = css\`
    :host {
      display: block;
      padding: 16px;
    }
  \`;

  render() {
    return html\`
      <h1>Hello from \${this.name}!</h1>
      <p>Check examples-100 for 100+ Lit examples</p>
    \`;
  }
}
