import Slide from "../modules/slide.js";

export default class slideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper);
    this.bindControlEvents();
  }

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.prevElement.addEventListener("click", this.activePrevSlide);
    this.nextElement.addEventListener("click", this.activeNextSlide);
  }

  createControl() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";
    this.slideArray.forEach((item, i) => {
      control.innerHTML += `<li><a href="#slide${i + 1}">${i + 1}</li>`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  eventControl(item, i) {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      this.changeSlide(i);
    });
    this.wrapper.addEventListener("changeEvent", this.activeControlItem);
  }

  activeControlItem() {
    this.controlArray.forEach((item) =>
      item.classList.remove(this.activeClass)
    );

    this.controlArray[this.index.active].classList.add(this.activeClass);
  }

  addControl(customControl) {
    this.control =
      document.querySelector(customControl) || this.createControl();
    this.controlArray = [...this.control.children];

    this.activeControlItem();
    this.controlArray.forEach(this.eventControl);
  }

  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}
