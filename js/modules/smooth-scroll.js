export default class SmoothScroll {
  constructor(links, options) {
    this.linksList = [...document.querySelectorAll(links)];

    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addEventLink() {
    this.linksList.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksList.length) {
      this.linksList.pop();
      console.log(this.linksList);
      this.addEventLink();
    }
    return this;
  }
}
