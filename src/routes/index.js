import warriorDetailPage from "../pages/warriorDetailPage";
import aboutUsPage from "../pages/aboutUsPage";
import warriorListPage from "../pages/warriorListPage";

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
  {
    path: "/:foo/detail-bojovnika/:id",
    component: warriorDetailPage,
  },
  {
    path: "/:foo/bojovnik/:id",
    component: warriorDetailPage,
  },
  {
    path: "/:bar/bojovnik/:id/:dusan",
    component: warriorDetailPage,
  },
];

export function matchRoute(pathname) {
  const urlSegments = pathname.split("/");

  for (const route of routes) {
    const routeSegments = route.path.split("/");
    let params = {};

    if (routeSegments.length !== urlSegments.length) {
      continue;
    }

    let getOut = false;
    for (let i = 0; i < routeSegments.length; i++) {
      if (routeSegments[i].startsWith(":")) {
        const segmentName = routeSegments[i].slice(1);

        params[segmentName] = urlSegments[i];
      } else if (urlSegments[i] !== routeSegments[i]) {
        getOut = true;
        break;
      }
    }
    if (getOut) {
      continue;
    }
    return {
      path: route.path,
      component: route.component,
      params: params, //môže byť aj params,
      //params: { foo: fooParam, id: idParam }, //ako zistiť čo dať do parametrov stredný continue
    };
  }
  //return errorpage
}

export default routes;
