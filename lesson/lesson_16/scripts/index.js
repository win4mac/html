import "./Ajax.js";
import { SlideShow } from "./slideshow.js";

const slideShowContainer = document.querySelector(".slider");
const mainSlideShow = new SlideShow(slideShowContainer);
mainSlideShow.init();
