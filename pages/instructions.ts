import { get, onValue, ref, update } from "firebase/database";
import { goTo } from "../src/index";
import { db } from "../src/firebase.config";
import { state } from "../state/state";
import { p1Ref } from "../controllers/insOnlineController";
import { resetButtons } from "../controllers/buttonsController";

class Instruct extends HTMLElement {
  constructor() {
    super();

    // Crear shadow root
    const root = document.querySelector("#root");

    //botones reiniciados
    resetButtons()
    if (root) {
      root.innerHTML = "";
    }
    // Crear los elementos

    const cont = document.createElement("div");
    const title = document.createElement("h1");
    const btn = document.createElement("button");
    const buttonsCont = document.querySelector(".index__cont") as HTMLElement;

    const changeColor = () => {
      buttonsCont.style.backgroundColor = "rgba(255, 255, 255, 0)";
    };

    // Crear estilo único y consolidados
    const style = document.createElement("style");

    // Agregar contenido
    title.textContent = `Presioná jugar
y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.`;
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
        margin-top:25px;
        margin-bottom:80px;
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
        width: 400px;
        margin: 0 auto;
        color: black;
        font-size: 60px;
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

    //update start value // actualizar valor start
    btn.addEventListener("click", (e) => {
      const updates = {
        start: true, // Cambiar el valor de "start"
      };

      const p1Ref = ref(
        db,
        `rooms/${state.roomLargeId}/currentGame/${state.playerId}`
      );

      update(p1Ref, updates)
        .then(() => {
          console.log("Campo actualizado correctamente.");
          goTo("/waitOtherPlayer");
        })
        .catch((error) => {
          console.error("Error al actualizar el campo:", error);
        });
    });

    const roomRef = ref(db, `rooms/${state.roomLargeId}/currentGame`);

    get(roomRef).then((snapshot) => {
      const dataVal = snapshot.val();
      let counter = 1;
      //si hay 2 usuarios en la sala
      if (Object.keys(dataVal).length == 2) {
        for (const key in dataVal) {
          const element = dataVal[key];

          state.playerNames[`player${counter}`] = element.name;
          counter++;
        }
      }
    });

    // Append al shadow DOM
    root.appendChild(style);
    cont.appendChild(title);
    cont.appendChild(btn);
    root.appendChild(cont);
    changeColor();
  }
}

// Definir el componente
customElements.define("instructive-cont", Instruct);
