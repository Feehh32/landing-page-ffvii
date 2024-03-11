import debounce from "../helpers/debounce.js";

export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 100);
  }

  // pega as distancias das sections em relação ao topo da página
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset) - this.halfWindow,
      };
    });
  }

  // Verifica a distancia da section em relação à posição do scroll
  // e adiciona a classe active para animar o scroll
  checkDistance() {
    console.log("teste");
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add("active");
      }
    });
  }

  // Adiciona o event de scroll no window
  addEventOnWindow() {
    window.addEventListener("scroll", this.checkDistance);
  }

  // Inicia os métodos para animar o scroll
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      this.addEventOnWindow();
    }
    return this;
  }

  // Remove o event de scroll do window
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
