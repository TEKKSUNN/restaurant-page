import { createParagraph, createHeading, resetContent, createDiv, appendChildAll, appendToContent, createImg, activateTab } from "./helpers.js";

export default function changeToContactTab() {
    resetContent("contact");
    const heading = createHeading("Contact Us");
    const para = createParagraph("+1 (555) 123-4567");
    appendToContent(heading, para);
    activateTab("contact-btn");
}