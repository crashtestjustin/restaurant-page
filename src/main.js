const page = document.getElementById("content");

export function navBar() {
  const header = document.createElement("div");
  header.classList.add("restaurant-nav");
  const homeButton = document.createElement("button");
  homeButton.classList.add("home");
  homeButton.textContent = "Home";
  const menuButton = document.createElement("button");
  menuButton.classList.add("menu");
  menuButton.textContent = "Menu";
  const contactButton = document.createElement("button");
  contactButton.classList.add("contact");
  contactButton.textContent = "Contact Us";

  page.appendChild(header);
  header.appendChild(homeButton);
  header.appendChild(menuButton);
  header.appendChild(contactButton);
}

export function titleSection() {}

export function contentSection() {}
