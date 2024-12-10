class FormDataComp extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode:"open"})
    const btn = document.createElement("btn-create")
    const input = document.createElement("input")
    const formDataContainer = document.createElement("div")    

    formDataContainer.appendChild(input)
    formDataContainer.appendChild(btn)
    shadow.appendChild(formDataContainer)


  }
}
customElements.define("form-data",FormDataComp)