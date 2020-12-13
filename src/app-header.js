import {LitElement, html, css} from "lit-element";

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
                      <li><a class="a__block" href="/">home</a></li>
                      <li><a class="a__block" href="/destinations">destinations</a></li>
                      <li><a class="a__block" href="#">language</a> </li>
                    </ul>
                  </nav>
                  <slot name="title"></slot>
                </div>`;
  }
}

export default customElements.define('app-header', AppHeader)