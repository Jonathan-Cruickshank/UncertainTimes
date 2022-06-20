const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `
<style>
a:link {
  color: blue;
}
a:visited {
  color: purple;
}

ul.nav-bar > li{
display: inline-block;
}

</style>

<hr/>
<div align = "center">
      <ul class="nav-bar">
    <li><a href="Article/Tags/Charity.html">Charity</a> |</li>
    </ul>
</div>
<hr/>
`

class Navbar extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(navbarTemplate.content);
    }
}

customElements.define('navbar-component', Navbar);
