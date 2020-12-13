import {LitElement, html} from "lit-element";
import './destination-post.js';
import './destination-section';

class DestinationMain extends LitElement {

  render() {
    return html`
        <app-header>
            <h1 slot="title">GoTravel</h1>
        </app-header>
        <section class="subtitle-section">
              <h2>Destinations</h2>
          </section>
          <destinations-section></destinations-section>
        <app-footer>
            <p slot="cc">&#169; ~ DevSchool 2020</p>
        </app-footer>`;
  }
}

export default customElements.define('destinations-main', DestinationMain)