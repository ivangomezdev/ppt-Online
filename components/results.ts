class Results extends HTMLElement{
    constructor(){
        super();

        //creo los contenedores-styles // create a container and styles
        const shadow = this.attachShadow({mode:"open"})
        const cont = document.createElement("div")
        const style = document.createElement("style")

        //Modifico su contenido // edit the content
        style.textContent = `
        .start__cont{
        display:"flex";
        justify-content:"column";
        align-items:"center";
        text-align:"center";
        }
        ` 
        cont.innerHTML = `
        
        `

        //adhiero el style y le hago append a mi shadow // add my style and make append to my shadow
        cont.classList.add("start__cont")
        shadow.appendChild(cont)
    }

}
//defino el component // define my component
customElements.define("results-cont",Results)