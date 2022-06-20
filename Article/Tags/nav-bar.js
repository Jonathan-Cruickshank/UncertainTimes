const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `
<style>
/*LINKS*/
a:link {
  color: blue;
}
a:visited {
  color: purple;
}
</style>

<div align = "center">
      <ul class="nav-bar">
    <li><a href="/../Article/Tags/Charity.html">Charity</a></li>
    </li>
    </ul>
</div>
`

class NavBar extends HTMLElement {
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
