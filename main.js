import "./style.css";

import markActualPathLinks from "./src/components/markActualPathLinks";
import { matchRoute } from "./src/routes";

let currentPath = window.location.pathname;

let currentRoute = matchRoute(currentPath);

if (currentRoute.isError) {
  document.querySelector("#app").innerHTML = `
     <div>
     ${currentRoute.component()}
     </div>
  `;
} else {
  document.querySelector("#app").innerHTML = `
  <nav id=navbar>
  <ul>
    <li><a class="nav-link" href="/list">List of Warriors</a></li>
    <li><a class="nav-link" href="/about-us" id="about-link"</a>About Us</li>
    <li><a class="nav-link" href="/builds"</a>Builds</li>
  </ul>
  </nav>
    <div>
      <a href="https://darksouls.wiki.fextralife.com/Dark+Souls+Wiki" target="_blank">
        <img src="/src/img/artorias.jpg" class="logo" alt="Vite logo" />
      </a>
    </div>
  <div>
  ${currentRoute.component(currentRoute.params)}
  </div> 
  `;
}
markActualPathLinks();
