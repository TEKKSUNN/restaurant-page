import { createParagraph, createHeading, resetContent, createDiv, appendChildAll, appendToContent, createImg, activateTab } from "./helpers.js";

import SmorrebrodTrio from "../images/sb-trio.jpg";
import VenisonStew from "../images/venison-stew.jpg";
import PsaChar from "../images/psa-char.jpg";
import NordicLambChops from "../images/nordic-lamb-chops.jpg";
import VegetarianRosti from "../images/vegetarian-rosti.jpeg";
import BerryAlmondTart from "../images/berry-almond-tart.jpg";

const createItem = function(name, description, image, imageId) {
    const newItem = createDiv("item");
    const heading = createHeading(name);
    const itemImage = createImg(image, imageId);
    const itemDesc = createParagraph(`Description: ${description}`);
    appendChildAll(newItem, heading, itemImage, itemDesc);
    return newItem;
}

export default function changeToMenuTab() {
    resetContent("menu");
    activateTab("menu-btn");
    const heading = createHeading("Menu");
    const items = createDiv("items");
    const item1 = createItem("Smørrebrød Trio", "An assortment of open-faced sandwiches featuring smoked salmon with dill cream, pickled herring with red onion, and roast beef with horseradish sauce, all served on dark rye bread.", SmorrebrodTrio);
    const item2 = createItem("Venison Stew", "A hearty, slow-cooked venison stew with root vegetables, wild mushrooms, and a rich red wine gravy, served with mashed potatoes.", VenisonStew);
    const item3 = createItem("Pan-Seared Arctic Char", "Fresh Arctic Char fillet, pan-seared to perfection, served with a lemon-butter sauce, sautéed kale, and roasted new potatoes.", PsaChar);
    const item4 = createItem("Nordic Lamb Chops", "Grilled lamb chops marinated in herbs and garlic, accompanied by a honey-glazed carrot puree and a side of lingonberry sauce.", NordicLambChops);
    const item5 = createItem("Vegetarian Rösti", "A crispy potato rösti topped with sautéed wild mushrooms, caramelized onions, and a dollop of herbed sour cream.", VegetarianRosti);
    const item6 = createItem("Berry & Almond Tart", "A delicate tart filled with almond cream and topped with a medley of fresh, seasonal Nordic berries, served with a side of vanilla bean ice cream.", BerryAlmondTart);
    appendChildAll(items, item1, item2, item3, item4, item5, item6);
    appendToContent(heading, items);
}