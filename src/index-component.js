import {html, LitElement} from "lit-element";

import "./app-header";
import "./app-footer";
import "./articles-section";

class IndexComponent extends LitElement {
  render(){

    return html`<app-header>
                <h1 slot="title">GoTravel</h1>
            </app-header>
            <main>
                <section class="subtitle-section">
                    <h2>Subtitle</h2>
                    <p>Aliquam scelerisque ipsum ante, at sollicitudin libero imperdiet nec.
                        Quisque egestas arcu nec tellus elementum rhoncus</p>
                </section>
                <articles-section></articles-section>
            </main>
            <app-footer>
                <p slot="cc">&#169; ~ DevSchool 2020</p>
            </app-footer>`;
  }
}

export default customElements.define('main-component', IndexComponent)