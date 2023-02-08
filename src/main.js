const page = document.getElementById("content");

function navBar() {
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

  header.appendChild(homeButton);
  header.appendChild(menuButton);
  header.appendChild(contactButton);

  return header;
}

function titleSection() {
  const titles = document.createElement("div");
  titles.classList.add("title-section");
  const header1 = document.createElement("h1");
  const header2 = document.createElement("h2");
  header1.textContent = "Justin's Burgers and Fries";
  header2.textContent = "The Best Burgers in Town!";

  titles.appendChild(header1);
  titles.appendChild(header2);

  return titles;
}

function contentSection() {
  const content = document.createElement("div");
  content.classList.add("content-section");

  return content;
}

function footerSection() {
  const footer = document.createElement("footer");
  const footerLink = document.createElement("a");
  footerLink.href = "https://github.com/crashtestjustin";
  const footerText = document.createElement("div");
  footerText.textContent = "Created by Justin Elliott - 2023";

  footer.appendChild(footerLink);
  footerLink.appendChild(footerText);

  return footer;
}

export function renderPage() {
  const page = document.getElementById("content");

  page.appendChild(navBar());
  page.appendChild(titleSection());
  page.appendChild(contentSection());
  page.appendChild(footerSection());
}
