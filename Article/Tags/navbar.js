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
/*NAV BAR/DROPDOWN*/
ul.nav-bar > li{
display: inline-block;
}
  li a, .dropbtn {
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li.dropdown {
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  padding: 12px 16px;
  border: 1px dashed black;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
  display: block;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>

<hr/>
<div align = "center">
      <ul class="nav-bar">
    <li><a href="Charity.html">Charity</a></li>
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
