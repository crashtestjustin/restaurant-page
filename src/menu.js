import { createParagraph } from "./home.js";
import classicBurger from "./images/classic.png";
import baconCheeseburger from "./images/Bacon-cheeseburger.jpg";
import chickenBurger from "./images/chicken.png";

function menuContent() {
  const menuSection = document.createElement("div");
  menuSection.classList.add("menu-section");

  menuSection.appendChild(
    menuItem(
      "The Classic",
      "Your classic burger! Enjoy a 6oz patty with cheese, lettuce, tomato, onion, and special sauce! Feel free to add more fixings!",
      classicBurger
    )
  );

  menuSection.appendChild(
    menuItem(
      "The Bacon CheeseBurger",
      "What more can we say! Add bacon to the classic and you've got yourself a burger for the bacon lover in you",
      baconCheeseburger
    )
  );

  menuSection.appendChild(
    menuItem(
      "The Chicken Deluxe",
      "Where's the beef??? Have no worries chicken lovers. Our epic chicken burger is sure to clear your burger craving!",
      chickenBurger
    )
  );

  return menuSection;
}

function menuItem(menuName, description, imageSource) {
  const section = document.createElement("div");
  section.classList.add("menu-item");

  const menuImage = new Image();
  menuImage.src = imageSource;
  menuImage.classList = "menu-image";
  section.appendChild(menuImage);

  const menuItemTitle = createParagraph(menuName);
  menuItemTitle.classList = "menu-title";
  section.appendChild(menuItemTitle);

  const menuDescription = createParagraph(description);
  menuDescription.classList = "menuDescription";
  section.appendChild(menuDescription);

  return section;
}

function substitutions() {
  const section = document.createElement("div");
  section.classList.add("substitutions");

  return section;
}

function renderMenuPage() {
  const contentSection = document.querySelector(".content-section");
  contentSection.textContent = "";

  contentSection.appendChild(menuContent());
}

export default renderMenuPage;
