class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
      </style>
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);
