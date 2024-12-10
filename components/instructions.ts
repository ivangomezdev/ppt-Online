class HowToCont extends HTMLElement {
    constructor() {
      super();
  
      // Crear shadow root
      const shadow = this.attachShadow({ mode: "open" });
  
      // Crear los elementos
  
      const cont = document.createElement("div");
      const title = document.createElement("h1");
      const btn = document.createElement("button");
  
      // Crear estilo único y consolidado
      const style = document.createElement("style");
  
      // Agregar contenido
      title.textContent = `Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.`;
      btn.textContent = "Jugar";
      
      btn.setAttribute("aria-label", "Empezar juego"); // Atributo de accesibilidad para el botón
  
      // Estilos CSS en un solo bloque
      style.textContent = `
        .start__cont {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 100vh;
        }
  
        .start__btn {
          width: 320px;
          height: 84px;
          background-color: #006cfc;
          border: solid 5px #001997;
          font-family: "Odibee Sans", sans-serif;
          color: #d8fcfc;
          border-radius: 10px;
          font-size: 45px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
  
        .start__btn:hover {
          background-color: #005bb5;
        }
  
        .start__h1 {
          width: 280px;
          margin: 0 auto;
          color: black;
          font-size: 70px;
          text-align: center;
          font-weight: 700;
          line-height: 1.1;
          padding: 60px;
        }
      `;
  
      // Agregar clases y elementos al contenedor
      cont.classList.add("start__cont");
      btn.classList.add("start__btn");
      title.classList.add("start__h1");
  
  
      // Append al shadow DOM
      shadow.appendChild(style);
      cont.appendChild(title);
      cont.appendChild(btn);
      shadow.appendChild(cont);
    }
  }
  
  // Definir el componente
  customElements.define("howTo-cont", HowToCont);