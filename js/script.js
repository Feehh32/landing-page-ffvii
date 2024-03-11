import SmoothScroll from "./modules/smooth-scroll.js";
import AnimaScroll from "./modules/anima-scroll.js";

const smoothScroll = new SmoothScroll("[data-links] li a");
smoothScroll.init();

const animaScroll = new AnimaScroll("[data-anime='scroll']");
animaScroll.init();
