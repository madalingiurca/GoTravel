import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class AppHeader extends LitElement{
  constructor() {
    super();
  }

  static get styles() {
    return css`.a__block {
                  background: var(--main-color);
                  color: white;
                  text-decoration: none;
                  margin: 10px;
                  border: 1px solid white;
                  width: 120px;
                  height: 30px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
              }
              
              .a__block:hover {
                  background: mediumslateblue;
              }
              
              a {
                  text-decoration: none;
                  color: darkslateblue;
              }
              
              div {
                  background: var(--main-color);
                  color: white;
                  display: flex;
                  flex-flow: column wrap;
                  justify-content: space-evenly;
                  height: 250px;
              }
              
              div nav {
                  top: 0;
                  position: sticky;
              }
              
              div slot {
                  text-align: center;
              }
              
              div nav ul {
                  list-style-type: none;
                  display: flex;
                  flex-flow: row wrap;
                  justify-content: center;
                  padding: 0;
                  margin: 0;
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
                  <nav>
                    <ul>
                      <li><a class="a__block" href="index.html">home</a></li>
                      <li><a class="a__block" href="destinations.html">destinations</a></li>
                      <li><a class="a__block" href="#">language</a> </li>
                    </ul>
                  </nav>
                  <slot name="title"></slot>
                </div>`;
  }
}

export default customElements.define('app-header', AppHeader)