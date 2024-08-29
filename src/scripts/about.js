import { createParagraph, createHeading, resetContent, createDiv, appendChildAll, appendToContent, activateTab } from "./helpers.js";

export default function changeToAboutTab() {
    resetContent("about");
    activateTab("about-btn");
    const heading = createHeading("About Us");
    const message = createDiv("msg");
    const para1 = createParagraph("Haraldr is more than just a restaurant; it's a celebration of Nordic culinary traditions brought to life in a modern setting.");
    const para2 = createParagraph("Our journey began with a passion for creating dishes that honor the rich history of Scandinavian cuisine while embracing contemporary techniques and flavors.");
    const para3 = createParagraph("At Haraldr, we believe that food is a form of art, and each dish is thoughtfully crafted using the freshest, locally-sourced ingredients.");
    const para4 = createParagraph("Our menu is a fusion of classic Nordic recipes and innovative twists that will surprise and delight your palate.");
    const para5 = createParagraph("We take pride in providing an intimate and welcoming atmosphere, where guests can relax and enjoy their meal, whether they're joining us for a casual lunch or a special evening out.");
    const para6 = createParagraph("Our team of chefs is dedicated to delivering a dining experience that is both memorable and unique, with a focus on quality and authenticity.");
    const para7 = createParagraph("Haraldr is also committed to sustainability, ensuring that our practices are environmentally responsible from farm to table.");
    const para8 = createParagraph("We strive to create a sense of community through our food, connecting people over shared meals and stories.");
    const para9 = createParagraph("With every visit, we aim to transport you to the heart of the Nordic regions, where the warmth of our hospitality matches the comfort of our cuisine.");
    const para10 = createParagraph("Thank you for choosing Haraldr; we look forward to welcoming you again and again.");
    appendChildAll(message, para1, para2, para3, para4, para5, para6, para7, para8, para9, para10);
    appendToContent(heading, message);
}