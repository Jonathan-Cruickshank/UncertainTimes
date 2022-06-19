const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<style>
/*LINKS*/
a:link {
  color: blue;
}

visited link
a:visited {
  color: purple;
  text-decoration: underline;
}

selected link
a:active {
  color: purple;
}

/*NAV BAR/DROPDOWN*/
ul.nav-bar > li{
display: inline-block;
}
</style>

<div>

<h1 align = "center"><u>The Uncertain Times</u></h1>
<p style="text-align:center; font-size:14pt;">Independent journalism, existential blogs, criminology portfolio</p>
  
<p style="text-align:center;"><img src="/../Gallery-images/The Rules.png" alt="The Rules: 1) Question everything. 2) If you can do something for yourself, do it. 3) Know your limits, it’s the only way you’ll know how you can help others. 4) The world deserves a second chance. 4a) That includes you. 5) You are not expendable." width="900" height="120" />

<hr/>

<div align = "center">

      <ul class="nav-bar">
    <li><a href="/../index.html">HOME</a> |</li>
    <li><a href="/../CV.html">ABOUT (CV)</a> |</li>
    <li><a href="/../Article/Tags/Tags.html">TOPICS </a>|</li>

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
