function menuContent() {
  const menuSection = document.createElement("div");
  menuSection.classList.add("menu-section");

  menuSection.textContent = "Menu goes here";

  return menuSection;
}

function renderMenuPage() {
  const contentSection = document.querySelector(".content-section");

  contentSection.appendChild(menuContent());
}

export default renderMenuPage;
