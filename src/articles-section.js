import {html, LitElement} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import './article-post.js';

class ArticlesSection extends LitElement {

    static get properties() {
        return {
            articles: {type: Array},
        }
    }

    constructor() {
        super();
        fetch('https://devschool-2020.firebaseio.com/madalin-giurca/articles.json')
            .then(response => response.json())
            .then(data => this.articles = data)
    }

    render() {
        if (!this.articles)
            return html`<h3>Loading..</h3>`;

        else
            return html`${
                Object.entries(this.articles).map(([k, v], index) => {
                    return html`
                        <article-post id=${k} title="${v['title']}" img_url="${v['img_url']}" ?reversed=${index % 2 === 0} >
                            <p slot="subtitle">${v['subtitle']}</p>
                            <p slot="description">${v['description']}</p>
                            <h1>${index}</h1>
                        </article-post>`
                })
            }`
    }
}

customElements.define('articles-section', ArticlesSection)