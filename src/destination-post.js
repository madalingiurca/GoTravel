// noinspection JSFileReferences
import {LitElement, html, css} from "lit-element";

class DestinationPost extends LitElement {

  constructor() {
    super();
    this.id = '';
    this.title = '';
    this.description = '';
    this.know_more_url = '';
    this.img_url = '';
    this.editing = false;
  }

  static get styles() {
    return css`button {
      position: relative;
      left: -10px;
      z-index: 99999;
      border-radius: 4px;
      background-color: var(--main-color);
      border: none;
      color: #FFFFFF;
      font-size: 13px;
      text-align: center;
      padding: 20px;
      transition: all 0.5s;
      cursor: pointer;
      margin: 5px;
      width: 62px;
    }

      .destination {
        margin: 0 10% 0 10%;
        padding: 5px;
        display: flex;
        flex-flow: row wrap;
      }

      .destination div {
        box-shadow: 6px 4px 7px 1px rgba(0, 0, 0, 0.82);
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

      .destination div p {
        margin: 10px 0 10px 0;
      }

      .destination div {
        padding: 1.5%;
      }

      a {
        text-decoration: none;
        color: darkslateblue;
      }
      input {
        display: block;
      }
      textarea {
        width: auto;
        height: 70px;
        max-width: 500px;
      }`;
  }

  static get properties() {
    return {
      title: {type: String},
      description: {type: String},
      know_more_url: {type: String},
      img_url: {type: String},
      editing: {type: Boolean}
    };
  }

  handleEditClick(event){
    if(this.editing) {
      const inputs = event.target.parentNode.childNodes[3].childNodes;
      this.title = inputs[1].value;
      this.description = inputs[3].value;
      this.know_more_url = inputs[5].value;

      let body = {
        title: this.title,
        description: this.description,
        know_more_url: this.know_more_url,
      }

      fetch(`https://devschool-2020.firebaseio.com/madalin-giurca/destinations/${this.id}.json`, {
        method: 'PATCH',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(body)
      }).then(response => console.log(response));

      this.editing = !this.editing;
    }
    else {
      this.editing = !this.editing;
    }
  }

  render() {

    return html`
        <div class="destination">
            <picture style="display: flex">
                <img src="${this.img_url}" alt="imgDestination1">
            </picture>
            <div>
                ${this.editing? 
                        html`<input id="newTitle" value=${this.title}>
                             <textarea id="newDescription"></textarea>
                             <input id="newURL" value="${this.know_more_url}">`
                        : 
                        html`<h3>${this.title}</h3>
                        <slot name="description"></slot>
                        <a href="${this.know_more_url}">> know more</a>`}
            </div>
            <button @click="${(event) => this.handleEditClick(event)}">${this.editing?"Save":"Edit"}</button>
        </div>`;
  }
}

export default customElements.define("destination-post", DestinationPost)