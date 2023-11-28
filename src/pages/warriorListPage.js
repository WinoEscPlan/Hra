import { warriors } from "../data/warriors";
import warriorListLayout from "../components/warriorsList/warriorListLayout";

function warriorListPage(params) {
  const searchParams = new URLSearchParams(window.location.search);
  params.type = searchParams.get("type");

  const warriorsFilteredByType = warriors.filter(
    (warrior) => warrior.type === params.type
  );

  return warriorListLayout(params, warriors, warriorsFilteredByType);
}

export default warriorListPage;
