const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `

<style>
/*LINKS*/

a:link {
  color: blue;
}
a:visited {
  color: purple;
}

</style>

<div>

<h1 align = "center"><u>The Uncertain Times</u></h1>
<p style="text-align:center; font-size:14pt;">To get in contact with a bug report, please email- tut-query.passcode222@silomails.com</p>

`

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);
