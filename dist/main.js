(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var c=n.getElementsByTagName("script");c.length&&(e=c[c.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"95abd82dce13f73b9bf3.jpg",n=t.p+"afd9cf593fd9248e3e60.jpeg";function c(t){const e=document.createElement("div");return e.textContent=t,e}const o=function(){const t=document.querySelector(".content-section");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home-section");const o=new Image;o.classList.add("car-image"),o.src=e;const d=new Image;d.classList.add("milshake-image"),d.src=n;const s=c("Serving the community delicious burgers since 1945!");s.classList.add("body-text");const a=c("Come try our delicious old-time favourites!");return a.classList.add("body-text"),a.classList.add("home-para-2"),t.appendChild(o),t.appendChild(s),t.appendChild(a),t.appendChild(d),t}())};function d(t){document.querySelectorAll("button").forEach((e=>{e!=t&&e.classList.remove("active-button")})),t.classList.add("active-button")}!function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("div");t.classList.add("restaurant-nav");const e=document.createElement("button");e.classList="home nav-button",e.textContent="Home",e.addEventListener("click",(t=>{d(e),o()}));const n=document.createElement("button");n.classList.add("nav-button"),n.textContent="Menu",n.addEventListener("click",(t=>{d(n),function(){const t=document.querySelector(".content-section");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu-section"),t.textContent="Menu goes here",t}())}()}));const c=document.createElement("button");return c.classList.add("nav-button"),c.textContent="Contact Us",c.addEventListener("click",(t=>{d(c),function(){const t=document.querySelector(".content-section");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact-section");const e=document.createElement("div");e.classList.add("contact-header"),t.appendChild(e);const n=document.createElement("div");n.classList.add("contact-title"),n.textContent="Contact Us Today!",e.appendChild(n);const c=document.createElement("div");return c.classList.add("contact-sub-title"),c.textContent="For any inquiries feel free to contact us today. Get in touch and we can support your needs.",e.appendChild(c),t}())}()})),t.appendChild(e),t.appendChild(n),t.appendChild(c),t}()),t.appendChild(function(){const t=document.createElement("div");t.classList.add("title-section");const e=document.createElement("h1"),n=document.createElement("h2");return e.textContent="CTJ's Burgers and Fries",n.textContent="The Best Burgers in Town!",t.appendChild(e),t.appendChild(n),t}()),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("content-section"),t}()),t.appendChild(function(){const t=document.createElement("footer"),e=document.createElement("a");e.href="https://github.com/crashtestjustin";const n=document.createElement("div");return n.textContent="Created by Justin Elliott - 2023",t.appendChild(e),e.appendChild(n),t}()),d(document.querySelector(".home")),o()}()})();