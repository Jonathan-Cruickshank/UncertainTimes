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
    <li><a href="/../index.html">HOME</a> |</li>
    <li><a href="/../CV.html">ABOUT (CV)</a> |</li>
    <li><a href="/../Article/Tags/Tags.html">TOPICS</a> |</li>
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
