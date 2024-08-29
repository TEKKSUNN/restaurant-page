import "./stylesheets/styles.css";

import RestaurantLogo from "./images/restaurant.png";

document.addEventListener("DOMContentLoaded", () => {
    const RestaurantInfo = document.getElementById("restaurant-info");
    (function addRestaurantInfo() {
        const title = document.createElement("h1");
        title.textContent = "Restaurant";
        title.id = "restaurant-title";
        const image = document.createElement("img");
        image.src = RestaurantLogo;
        image.alt = "restaurant logo";
        image.id = "restaurant-logo";
        RestaurantInfo.appendChild(image);
        RestaurantInfo.appendChild(title);
    })();
});