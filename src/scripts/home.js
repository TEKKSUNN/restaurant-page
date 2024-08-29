import { createParagraph, createHeading, resetContent, createDiv, appendChildAll, appendToContent, createImg, activateTab } from "./helpers.js";

import HomeImage from "../images/home-image.jpg";

export default function changeToHomeTab() {
    resetContent("home");
    const message = createDiv("msg");
    const heading = createHeading("Welcome to Haraldr!");
    const para1 = createParagraph("We're delighted to have you here.");
    const para2 = createParagraph("At Haraldr, we take pride in offering a cozy atmosphere paired with delicious dishes crafted from the freshest ingredients.");
    const para3 = createParagraph("Whether you're here for a quick bite, a family dinner, or a special occasion, we promise a dining experience that will leave you satisfied and eager to return.");
    appendChildAll(message, heading, para1, para2, para3);
    const homeImage = createImg(HomeImage, "home-img");
    activateTab("home-btn");
    appendToContent(message, homeImage);
}