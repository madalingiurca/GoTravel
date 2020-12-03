import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class DestinationPost extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.description = '';
    this.know_more_url = '';
    this.img_url = '';
  }

  static get styles() {
    return css`.destination {
                    margin: 0 10% 0 10%;
                    padding: 5px; /*un mic gap fara padding*/
                    display: flex;
                    flex-flow: row wrap;
                }
                
                .destination div {
                    background-color: #f0f0f0;
                    flex: 7;
                    padding: 5% 0 0 5%;
                }
                
                .destination img {
                    flex: 9;
                }
                
                .destination h3 {
                    color: var(--main-color);
                    margin: 10px 0 10px 0;
                }
                
                .destination div slot {
                    margin: 10px 0 10px 0;
                }
                
                .destination div {
                    padding: 1.5%;
                }
                
                a {
                    text-decoration: none;
                    color: darkslateblue;
                }`;
  }

  static get properties() {
    return {
      title: {type: String},
      description: {type: String},
      know_more_url: {type: String},
      img_url: {type: String}
    };
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  render() {
    return html`<div class="destination">
                    <picture style="display: flex">
                        <img src="${this.img_url}" alt="imgDestination1">
                    </picture>
                    <div>
                        <h3>${this.title}</h3>
                        <slot name="description">
                            Destination 1 description
                        </slot>
                        <a href="${this.know_more_url}">> know more</a>
                    </div>
                </div>`;
  }
}

export default customElements.define("destination-post", DestinationPost)