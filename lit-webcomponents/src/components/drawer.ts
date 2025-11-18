import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-${file}')
export class ${file} extends LitElement {
  render() {
    return html`<div>${file}</div>`;
  }
}
