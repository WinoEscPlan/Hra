import "./style.css";
import warriorDetailPage from "./src/pages/warriorDetailPage";
import warriorListPage from "./src/pages/warriorListPage";
import aboutUsPage from "./src/pages/aboutUsPage";
import checkURL from "./src/components/checkURL";
import errorPage from "./src/pages/errorPage";

let page = warriorListPage;
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
  {
    path: "*",
    component: errorPage,
  },
];

routes.forEach((route) => {
  if (window.location.pathname.includes(route.path)) {
    page = route.component;
  }
});
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
   <div id="details">
  
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
