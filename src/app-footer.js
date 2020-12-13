import {LitElement, html, css} from "lit-element";

class AppFooter extends LitElement{
  constructor() {
    super();
  }

  static get styles() {
    return css`div {
                    background: var(--main-color);
                    color: white;
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: center;
                    align-content: center;
                    height: 50px;
                }`;
  }

  static get properties() {
    return {};
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  render() {
    return html`<div>
                    <slot name="cc"></slot>
                </div>`;
  }
}

export default customElements.define('app-footer', AppFooter)