import "./style.css";
import warriorDetailPage from "./src/pages/warriorDetailPage";
import warriorListPage from "./src/pages/warriorListPage";
import aboutUsPage from "./src/pages/aboutUsPage";
import checkURL from "./src/components/checkURL";
import errorPage from "./src/pages/errorPage";

let page = warriorListPage;
let matchFound = false;
const routes = [
  {
    path: "/detail-bojovnika/",
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

routes.forEach((route) => {
  if (window.location.pathname.includes(route.path)) {
    console.log(`Matched path: ${route.path}`);
    page = route.component;
    matchFound = true;
  } else if (!matchFound) {
    page = errorPage;
  }
});
console.log(`Selected page: ${page}`);
//route.path === "*" ||

document.querySelector("#app").innerHTML = `

<nav>
<ul>
  <li><a class="nav-link" href="/list">Home</a></li>
  <li><a class="nav-link" href="/about-us" id="about-link"</a>About Us</li>
</ul>
</nav>
  <div>
    <a href="https://darksouls.wiki.fextralife.com/Dark+Souls+Wiki" target="_blank">
      <img src="/src/img/artorias.jpg" class="logo" alt="Vite logo" />
    </a>
  </div>
  <h1>Evil vs Good</h1>
  ${page()}
   <div id="details"></div>
  
`;
function markActualPathLinks() {
  const activePage = window.location.pathname;
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.href.includes(activePage)) {
      link.classList.add("active");
    }
  });
}

markActualPathLinks();

//checkURL();
