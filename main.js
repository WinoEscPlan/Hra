import "./style.css";
import warriorDetailPage from "./src/pages/warriorDetailPage";
import warriorListPage from "./src/pages/warriorListPage";
import aboutUsPage from "./src/pages/aboutUsPage";
import errorPage from "./src/pages/errorPage";
import markActualPathLinks from "./src/components/markActualPathLinks";

let page = warriorListPage;
let matchFoundInPaths = false;
const routes = [
  {
    path: "/detail-bojovnika/:id",
    component: warriorDetailPage,
  },
  {
    path: "/about-us",
    component: aboutUsPage,
  },
  {
    path: "/list",
    component: warriorListPage,
  },
];
let currentPath = window.location.pathname;

routes.forEach((route) => {
  let isItMatched = currentPath.match(route.path);
  if (isItMatched) {
    //console.log(`Matched path: ${currentPath}`);
    page = route.component;
    matchFoundInPaths = true;
    console.log("ID:", isItMatched[1]);
  } else if (!matchFoundInPaths) {
    page = errorPage;
    console.log("ID:", "is not number");
  }
});

//console.log(`Selected page: ${page}`);
//route.path === "*" ||
// test git

if (matchFoundInPaths) {
  document.querySelector("#app").innerHTML = `

  <nav id=navbar>
  <ul>
    <li><a class="nav-link" href="/list">List of Warriors</a></li>
    <li><a class="nav-link" href="/about-us" id="about-link"</a>About Us</li>
  </ul>
  </nav>
    <div>
      <a href="https://darksouls.wiki.fextralife.com/Dark+Souls+Wiki" target="_blank">
        <img src="/src/img/artorias.jpg" class="logo" alt="Vite logo" />
      </a>
    </div>
     <div>
     ${page()}
     </div>
  `;
} else {
  document.querySelector("#app").innerHTML = `
  <div>
  ${page()}
  </div> 
  `;
}
markActualPathLinks();
