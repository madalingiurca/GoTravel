import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class ArticlePost extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.subtitle = '';
    this.img_url = '';
    this.reversed = false;
  }

  static get styles() {
    return css`.article {
                display: flex;
                flex-flow: row wrap;
                }
                .article div {
                    background-color: #f0f0f0;
                    flex: 7;
                    padding: 5% 0 0 5%;
                }               
                .article img {
                    flex: 9;
                }
                .article h3 {
                    margin: 0;
                }
                .article p {
                    margin: 0;
                }`;
  }

  static get properties() {
    return {
      title: {type: String},
      subtitle: {type: String},
      img_url: {type: String},
      reversed: {type: Boolean}
    };
  }

  attributeChangedCallback(name, oldVal, newVal) {
      super.attributeChangedCallback(name, oldVal, newVal);
  }

  render() {
    return html`<div class="article" 
                     style="${this.reversed === false ? css`flex-flow:row wrap` : css`flex-flow:row-reverse wrap`}"
                     >
            <img src="${this.img_url}" alt="article_img">
              <div>
                  <h2>${this.title}</h2>
                  <slot name="subtitle"></slot>
                  <slot name="description"></slot>
              </div>
            </div>`;
  }
}

export default customElements.define("article-post", ArticlePost)