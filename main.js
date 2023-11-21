import "./style.css";
import layout from "./layout";
import errorLayout from "./errorLayout";

import markActualPathLinks from "./src/components/markActualPathLinks";
import { matchRoute } from "./src/routes";

const currentRoute = matchRoute(window.location.pathname);

let contentComponent;

if (currentRoute.isError) {
  contentComponent = errorLayout;
} else {
  contentComponent = layout;
}

document.querySelector("#app").innerHTML = contentComponent(currentRoute);

markActualPathLinks();
