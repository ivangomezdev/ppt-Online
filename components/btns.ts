import { goTo } from "../src/index";
import { state } from "../state/state";

class Btns extends HTMLElement {
  btnText: string;
  constructor() {
    super();

    //URL Fetch
    const CREATE__ROOM = "http://localhost:3000/createRoom";
    // Crear shadow root
    const shadow = this.attachShadow({ mode: "open" });
    const btn = document.createElement("button");
    const btnStyle = document.createElement("style");

    // Asignar texto al botón (dinámico)
    btn.textContent = this.btnText;

    // Escuchar eventos
    if (this.btnText == "Join Room") {
      btn.addEventListener("click", (e) => {
        state.createNewRoom = false;
        goTo("/joinRoom");
      });
    } else if (this.btnText == "Crear Room") {
      btn.addEventListener("click", (e) => {
        state.createNewRoom = true
        goTo("/joinName");
        fetch(CREATE__ROOM, {
          method: "POST", // Método de la petición
          headers: {
            "Content-Type": "application/json", // Tipo de contenido
          },
        })
          .then((resData) => {
           resData.json().then(data=>{
              state.roomId = data.dbId;
              state.roomLargeId = data.dbIdLarge;
           
              
            });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }

    // Estilo del botón
    btnStyle.textContent = `
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
        margin-bottom: 10px;
      }
    
      .start__btn:hover {
        background-color: #005bb5;
      };
`;
    // Aplicar clases y adjuntar al Shadow DOM
    btn.classList.add("start__btn");
    shadow.appendChild(btnStyle);
    shadow.appendChild(btn);
  }
}

// Registrar el Custom Element
customElements.define("btn-create", Btns);
