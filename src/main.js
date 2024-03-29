import renderHomePage from "./home.js";
import renderMenuPage from "./menu.js";
import renderContactPage from "./contact.js";

function navBar() {
  const header = document.createElement("div");
  header.classList.add("restaurant-nav");

  const homeButton = document.createElement("button");
  homeButton.classList = "home nav-button";
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    activePageButton(homeButton);
    renderHomePage();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-button");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    activePageButton(menuButton);
    renderMenuPage();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("nav-button");
  contactButton.textContent = "Contact Us";
  contactButton.addEventListener("click", (e) => {
    activePageButton(contactButton);
    renderContactPage();
  });

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
  header1.textContent = "CTJ's Burgers and Fries";
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

  const text1 = "- 2023";
  const text2 =
    "<a href='https://github.com/crashtestjustin'>Created by Justin Elliott</a>";
  const finalString = `${text2} ${text1}`;

  const footerChild = document.createElement("div");
  footerChild.classList.add("footer-text");
  footerChild.innerHTML = finalString;

  footer.appendChild(footerChild);

  return footer;
}

function activePageButton(activeButton) {
  const activeButtonCheck = document.querySelectorAll("button");
  activeButtonCheck.forEach((button) => {
    if (button != activeButton) {
      button.classList.remove("active-button");
    }
  });
  activeButton.classList.add("active-button");
}

export function renderPage() {
  const page = document.getElementById("content");

  page.appendChild(navBar());
  page.appendChild(titleSection());
  page.appendChild(contentSection());
  page.appendChild(footerSection());

  activePageButton(document.querySelector(".home"));
  renderHomePage();
}
