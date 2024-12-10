
class Title extends HTMLElement {
  btnText: string;
  constructor() {
    super();

    // Crear shadow root
    const shadow = this.attachShadow({ mode: "open" });
    const title = document.createElement("h1");
    const style = document.createElement("style")
    style.textContent = `
        .start__h1 {
      width: 280px;
      margin: 0 auto;
      color: #009048;
      font-size: 90px;
      text-align: center;
      font-weight: 700;
      line-height: 1.1;
      padding: 60px;
    }
    `
    title.textContent = "Piedra Papel Tijeras";
    title.classList.add("start__h1");

    shadow.appendChild(style)
    shadow.appendChild(title)
}

}
// Registrar el Custom Element
customElements.define("title-create", Title);