import "./style.css";
import layout from "./layout";
import errorLayout from "./errorLayout";
import markActualPathLinks from "./src/components/markActualPathLinks";
import { matchRoute } from "./src/routes";

function renderContent(route) {
  let contentComponent;

  if (route.isError) {
    contentComponent = errorLayout;
  } else {
    contentComponent = layout;
  }

  document.querySelector("#app").innerHTML = contentComponent(route);
}

const currentRoute = matchRoute(window.location.pathname);
renderContent(currentRoute);

function handleCustomClick() {
  const newRoute = matchRoute(window.location.pathname);

  renderContent(newRoute);
  document.dispatchEvent(new CustomEvent("custom:HTMLready"));
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("custom:clickEvent", handleCustomClick);
  document.dispatchEvent(new CustomEvent("custom:HTMLready"));
});

document.addEventListener("reRender", () => {
  const newRoute = matchRoute(window.location.pathname);
  console.log("tu sme");
  renderContent(newRoute);
  document.dispatchEvent(new CustomEvent("custom:HTMLready"));
});
markActualPathLinks();
