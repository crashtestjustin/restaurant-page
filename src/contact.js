import { createParagraph } from "./home.js";
import mouseIcon from "./icons/mouse.svg";
import mailIcon from "./icons/mail.svg";
import messageIcon from "./icons/message.svg";
import phoneIcon from "./icons/phone.svg";

function contactContent() {
  const contactSection = document.createElement("div");
  contactSection.classList.add("contact-section");

  contactSection.appendChild(contactHeaderSection());

  contactSection.appendChild(emailAddress());
  contactSection.appendChild(phoneNumber());
  contactSection.appendChild(mailSection());
  contactSection.appendChild(website());

  return contactSection;
}

function contactHeaderSection() {
  const contactHeader = document.createElement("div");
  contactHeader.classList.add("contact-header");

  const contactTitle = document.createElement("div");
  contactTitle.classList.add("contact-title");
  contactTitle.textContent = "Contact Us Today!";
  contactHeader.appendChild(contactTitle);

  const contactSubTitle = document.createElement("div");
  contactSubTitle.classList.add("contact-sub-title");
  contactSubTitle.textContent =
    "For any inquiries feel free to contact us today. Get in touch and we can support your needs.";
  contactHeader.appendChild(contactSubTitle);

  return contactHeader;
}

function emailAddress() {
  const emailSection = document.createElement("div");
  emailSection.classList = "contact-details email-section";

  //   const emailIcon = document.createElement("div");
  const emailIcon = new Image();
  emailIcon.classList = "icon email-icon";
  emailIcon.src = mailIcon;
  emailSection.appendChild(emailIcon);

  const email = createParagraph("contact@ctjsburgershop.com");
  email.classList.add("contact-email");
  emailSection.appendChild(email);

  return emailSection;
}

function phoneNumber() {
  const phoneSection = document.createElement("div");
  phoneSection.classList = "contact-details phone-section";

  const phoneIcon1 = new Image();
  phoneIcon1.classList = "icon phone-icon";
  phoneIcon1.src = phoneIcon;
  phoneSection.appendChild(phoneIcon1);

  const phone = createParagraph("+1 999-999-9999");
  phone.classList.add("contact-phone");
  phoneSection.appendChild(phone);

  return phoneSection;
}

function website() {
  const websiteSection = document.createElement("div");
  websiteSection.classList = "contact-details website-section";

  const websiteIcon = new Image();
  websiteIcon.classList = "icon website-icon";
  websiteIcon.src = mouseIcon;
  websiteSection.appendChild(websiteIcon);

  const site = createParagraph("www.ctjsburgershop.com");
  site.classList.add("website");
  websiteSection.appendChild(site);

  return websiteSection;
}

function mailSection() {
  const mailingSection = document.createElement("div");
  mailingSection.classList = "contact-details mailing-section";

  const mailIcon = new Image();
  mailIcon.classList = "icon mail-icon";
  mailIcon.src = messageIcon;
  mailingSection.appendChild(mailIcon);

  const mailText = createParagraph(mailingAddress());
  mailText.classList.add("mailing-address");
  mailingSection.appendChild(mailText);

  return mailingSection;
}

function mailingAddress() {
  let start = "123 Main Street~Vancouver, BC~Canada  V1W R4E";
  start = start.split("~");

  for (let i = 0; i < start.length; i++) {
    start[i] = `${start[i]}\n`;
  }

  start = start.join("");

  return start;
}

function renderContactPage() {
  const contentSection = document.querySelector(".content-section");
  contentSection.textContent = "";

  contentSection.appendChild(contactContent());
}

export default renderContactPage;
