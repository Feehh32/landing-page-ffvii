export default class SmoothScroll {
  constructor(links, options) {
    this.linksList = [...document.querySelectorAll(links)];

    // define se as opçoes de scroll serão as predefinidas ou
    //  se serão predefinidas pelo usuário da classe

    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  // captura o href da sessão correspondente ao link e
  // adiciona o efeito de scroll suave de acordo com o options

  scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  // adiciona um evento de click e a função de scroll suave em cada link interno
  addEventLink() {
    this.linksList.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksList.length) {
      // retira o link que deve levar ao trailer
      this.linksList.pop();
      this.addEventLink();
    }
    return this;
  }
}
