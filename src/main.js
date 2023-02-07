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

export function titleSection() {
  const titles = document.createElement("div");
  titles.classList.add("title-section");
  const header1 = document.createElement("h1");
  const header2 = document.createElement("h2");
  header1.textContent = "Justin's Burgers and Fries";
  header2.textContent = "The Best Burgers in Town!";

  page.appendChild(titles);
  titles.appendChild(header1);
  titles.appendChild(header2);
}

export function contentSection() {
  const content = document.createElement("div");
  content.classList.add("content-section");
  page.appendChild(content);
}

export function footerSection() {
  const footer = document.createElement("footer");
  const footerText = document.createElement("div");
  footerText.textContent = "Created by Justin Elliott - 2023";
  page.appendChild(footer);
  footer.appendChild(footerText);
}
