function errorLayout(currentRoute) {
  return `
     <div>
     ${currentRoute.component()}
     </div>
  `;
}

export default errorLayout;
