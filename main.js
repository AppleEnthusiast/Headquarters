class MyHeader extends HTMLElement {
 connectedCallback(){
  this.innerHTML = `<header>
  <div class="container">
   <div id="branding">
    <img src="./img/myLogo.png" alt="Mein Logo">
    <h1>Hauptquartier</h1>
   </div>
   <nav>
    <ul>
     <li><a href="index.html">Hauptquartier</a></li>
     <li><a href="termine.html">Termine</a></li>
     <li><a href="pick_up.html">Pick up</a></li>
    </ul>
   </nav>
  </div>
 </header>`
 }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
 connectedCallback(){
  this.innerHTML = `<footer><p>&copy Copyright 2022 Teoman Dogueri | WebWizard</p></footer>`
 }
}
customElements.define('my-footer', MyFooter)