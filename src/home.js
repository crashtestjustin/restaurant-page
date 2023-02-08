import carImage from "./images/car-image.jpg";
import milkshake from "./images/milkshake.jpeg";

function homeContent() {
  const homeSection = document.createElement("div");
  homeSection.classList.add("home-section");

  const dinerCarImg = new Image();
  dinerCarImg.classList.add("car-image");
  dinerCarImg.src = carImage;

  const milkshakeImg = new Image();
  milkshakeImg.classList.add("milshake-image");
  milkshakeImg.src = milkshake;

  const para1 = createParagraph(
    "Serving the community delicious burgers since 1945!"
  );
  para1.classList.add("body-text");

  const para2 = createParagraph("Come try our delicious old-time favourites!");
  para2.classList.add("body-text");
  para2.classList.add("home-para-2");

  homeSection.appendChild(dinerCarImg);
  homeSection.appendChild(para1);
  homeSection.appendChild(para2);
  homeSection.appendChild(milkshakeImg);

  return homeSection;
}

function createParagraph(text) {
  const para = document.createElement("div");
  para.textContent = text;

  return para;
}

function renderHomePage() {
  const contentSection = document.querySelector(".content-section");

  contentSection.appendChild(homeContent());
}

export default renderHomePage;
