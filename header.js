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
  ul.nav-bar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    display:inline;
  }

  li a {
    display: block;
    display: inline;
    padding: 8px;
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
}

.dropdown:hover .dropdown-content {
  display: block;
}

li.sources{
  list-style: circle;
}
</style>

<div>

<hr/>

<div align = "center">

      <ul class="nav-bar">
    <li><a href="index.html">HOME</a> |</li>
    <li><a href="Audio Test.html">AUDIO</a> |</li>
    <li><a href="Gallary.html">GALLARY</a> |</li>
    <li><a href="CV.html">ABOUT (CV)</a> |</li>
    <li><a href="Article\Tags.html">TOPICS </a>|</li>

    <li class="dropdown">
      <a href="javascript:void(0)" class="dropbtn">SOCIALS</a>
      <div class="dropdown-content">
        <a href="https://gab.com/A_Prince_of_Cats">Gab</a>
        <a href="https://twitter.com/JCruin">Twitter</a>
        <a href="https://www.youtube.com/channel/UCcAbMxs9U3KW7WxkNhSg_8Q">Youtube</a>
        <a href="https://www.patreon.com/user?u=19009526">Patreon</a>
        <a href="https://www.ko-fi.com/I2I85CW5">Ko-fi</a>
        <a href="https://github.com/APrinceofCats">GitHub</a>
      </div>
    </li>
</div>
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
