import SmoothScroll from "./modules/smooth-scroll.js";
import AnimaScroll from "./modules/anima-scroll.js";
import SlideNav from "./controllers-slide/slideNav.js";

const smoothScroll = new SmoothScroll("[data-links] li a");
smoothScroll.init();

const animaScroll = new AnimaScroll("[data-anime='scroll']");
animaScroll.init();

const slide = new SlideNav("[data-slide]", "[data-slide-wrapper]");
slide.init();
slide.addArrow(".screenshots-prev", ".screenshots-next");
slide.addControl();
