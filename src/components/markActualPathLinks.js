function markActualPathLinks() {
  const activePage = window.location.pathname;
  document
    .querySelectorAll("nav a")
    .forEach((link) =>
      link.classList.toggle("active", link.pathname === activePage)
    );
}

export default markActualPathLinks;
//upravíme - zmazeme
