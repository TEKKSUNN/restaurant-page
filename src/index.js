import "./stylesheets/styles.css";

import RestaurantLogo from "./images/restaurant.png";

import template from "./template.html";

import { createLinkTag } from "./scripts/helpers.js";
import changeToHomeTab from "./scripts/home.js";
import changeToMenuTab from "./scripts/menu.js";
import changeToAboutTab from "./scripts/about.js";
import changeToContactTab from "./scripts/contact.js";

document.addEventListener("DOMContentLoaded", () => {
    const RestaurantInfo = document.getElementById("restaurant-info");
    (function addRestaurantInfo() {
        const linkTitle = createLinkTag(template);
        const title = document.createElement("h1");
        title.textContent = "Haraldr";
        title.id = "restaurant-title";
        linkTitle.appendChild(title);
        const linkImage = createLinkTag(template);
        const image = document.createElement("img");
        image.src = RestaurantLogo;
        image.alt = "restaurant logo";
        image.id = "restaurant-logo";
        linkImage.appendChild(image);
        RestaurantInfo.appendChild(linkImage);
        RestaurantInfo.appendChild(linkTitle);
    })();
    changeToHomeTab();

    document.getElementById("home-btn").addEventListener("click", changeToHomeTab);
    document.getElementById("menu-btn").addEventListener("click", changeToMenuTab);
    document.getElementById("about-btn").addEventListener("click", changeToAboutTab);
    document.getElementById("contact-btn").addEventListener("click", changeToContactTab);
});