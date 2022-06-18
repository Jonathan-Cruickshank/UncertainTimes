class Nav-Bar extends HTMLElements {
  constructor() {
    super();
  }
}

<hr/>

    <!--NavBar-->
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

    <hr/>

customElements.define('nav-bar-component', Nav-Bar);
