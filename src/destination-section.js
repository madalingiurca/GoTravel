// noinspection JSFileReferences
import {LitElement, html, css} from "lit-element";
import './destination-post.js';

class DestinationsSection extends LitElement {

  static get styles() {
    return css`
      .loader {
        margin: 40px auto;
        border: 5px solid #f3f3f3; /* Light grey */
        border-top: 5px solid var(--main-color); /* Blue */
        border-bottom: 0;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 4s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .animate-bottom {
        position: relative;
        -webkit-animation-name: animatebottom;
        -webkit-animation-duration: 1.5s;
        animation-name: animatebottom;
        animation-duration: 1.5s
      }

      @-webkit-keyframes animatebottom {
        from {
          bottom: -120px;
          opacity: 0
        }
        to {
          bottom: 0;
          opacity: 1
        }
      }

      @keyframes animatebottom {
        from {
          bottom: -120px;
          opacity: 0
        }
        to {
          bottom: 0;
          opacity: 1
        }
      }
    `
  }

  static get properties() {
    return {
      destinations: {type: Array},
    }
  }

  constructor() {
    super();
    fetch('https://devschool-2020.firebaseio.com/madalin-giurca/destinations.json')
      .then(response => response.json())
      .then(data => this.destinations = data)
  }

  render() {
    return !this.destinations ? html`
        <div class="loader"></div>`
      :
      html`${
        Object.entries(this.destinations).map(([k, v]) => {
          return html`
              <destination-post class="animate-bottom" id="${k}" title="${v['title']}" img_url="${v['img_url']}">
                  <p slot="description">${v['description']}</p>
              </destination-post>
        `
        })
      }`;
  }
}

export default customElements.define('destinations-section', DestinationsSection)