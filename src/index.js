import "./stylesheets/styles.css";

import RestaurantLogo from "./images/restaurant.png";

import template from "./template.html";

import { createLinkTag } from "./scripts/helpers.js";
import changeToHomeTab from "./scripts/home.js";

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
});