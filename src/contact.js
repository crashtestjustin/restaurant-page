function contactContent() {
  const contactSection = document.createElement("div");
  contactSection.classList.add("contact-section");

  contactSection.textContent = "Contact info goes here";

  return contactSection;
}

function renderContactPage() {
  const contentSection = document.querySelector(".content-section");
  contentSection.textContent = "";

  contentSection.appendChild(contactContent());
}

export default renderContactPage;
