function warriorList(warriors, className) {
  const list = warriors
    .map(
      (warrior) =>
        `<li><a href="/detail-bojovnika/${warrior.id}" >ID: ${warrior.id}, Name: ${warrior.name}, Type: ${warrior.type}</a></li>`
    )

    .join(" ");

  return `<ol class="${className}">${list}</ol>`;
}

export default warriorList;
