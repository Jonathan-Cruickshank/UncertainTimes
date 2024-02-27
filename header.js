const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

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

<div>

<h1 align = "center"><u>The Uncertain Times</u></h1>
<p style="text-align:center; font-size:14pt;">Independent journalism, existential blogs, criminology portfolio</p>
  
<p style="text-align:center;"><img src="The Rules.png" alt="The Rules: 1) Question everything. 2) If you can do something for yourself, do it. 3) Know your limits, it’s the only way you’ll know how you can help others. 4) The world deserves a second chance. 4a) That includes you. 5) You are not expendable." width="900" height="120" />

<hr/>

<div align = "center">

      <ul class="nav-bar">
    <li><a href="https://jonathan-cruickshank.github.io/UncertainTimes/">HOME</a> |</li>
    <li><a href="https://jonathan-cruickshank.github.io/UncertainTimes/CV.html">ABOUT (CV)</a> |</li>

    <li class="dropdown">
      <a href="javascript:void(0)" class="dropbtn">SOCIALS</a>
      <div class="dropdown-content">
        <a href="https://www.youtube.com/channel/UCcAbMxs9U3KW7WxkNhSg_8Q" target="_blank">Youtube</a>
        <a href="https://github.com/jonathan-cruickshank" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/jonathan-cruickshank-1a7493165/" target="_blank">LinkedIn</a>
    </li>

    </ul>
</div>
<hr/>

`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);
