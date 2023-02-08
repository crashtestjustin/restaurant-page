function contactContent() {
  const contactSection = document.createElement("div");
  contactSection.classList.add("contact-section");

  const contactHeader = document.createElement("div");
  contactHeader.classList.add("contact-header");
  contactSection.appendChild(contactHeader);

  const contactTitle = document.createElement("div");
  contactTitle.classList.add("contact-title");
  contactTitle.textContent = "Contact Us Today!";
  contactHeader.appendChild(contactTitle);

  const contactSubTitle = document.createElement("div");
  contactSubTitle.classList.add("contact-sub-title");
  contactSubTitle.textContent =
    "For any inquiries feel free to contact us today. Get in touch and we can support your needs.";
  contactHeader.appendChild(contactSubTitle);

  return contactSection;
}

function email() {
  const email = document.createElement("div");
  email.textContent = "Email: contact@ctjsburgershop.com";

  return email;
}

function phone() {
  const phone = document.createElement("div");
  phone.textContent = "Phone: +1 999-999-9999";

  return phone;
}

function renderContactPage() {
  const contentSection = document.querySelector(".content-section");
  contentSection.textContent = "";

  contentSection.appendChild(contactContent());
}

export default renderContactPage;
