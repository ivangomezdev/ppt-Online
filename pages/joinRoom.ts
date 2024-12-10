import { goTo } from "../src";
import { state } from "../state/state";

export const joinRoom = () => {
  const inputJoin = document.createElement("input");
  const btns = document.createElement("button");
  const root = document.querySelector("#root");
  const joinRoomForm = document.createElement("form");
  const style = document.createElement("style");
  const title = document.createElement("title-create");

  // Crear estilos para los elementos
  style.textContent = `
      .jroomContainer {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items:center
      }
      
      .jroomInput {
        width: 290px;
        height: 40px;
        border: solid 5px black;
        font-family: "Odibee Sans", sans-serif;
        color: #d8fcfc;
        border-radius: 10px;
        font-size: 20px;
        padding: 10px;
        transition: background-color 0.3s;
      }

      .jroomButton {
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
    
      .jroomButton:hover {
        background-color: #005bb5;
      };
    `;

  // Aplicar las clases a los elementos
  joinRoomForm.classList.add("jroomContainer");
  inputJoin.classList.add("jroomInput");
  btns.classList.add("jroomButton")


  //aplicar textos a los elementos
  btns.textContent = "Ingresar al Room"
  inputJoin.placeholder = "ROOM ID...";

  //aplicar addEventListeners()
  joinRoomForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    state.roomId = inputJoin.value
    goTo("/joinName")
    
    
  })



  if (root) {
    // Limpiar contenido previo
    root.textContent = "";


  // Agregar todo al contenedor y al root
  joinRoomForm.appendChild(title);
  joinRoomForm.appendChild(inputJoin);
  joinRoomForm.appendChild(btns);
  root?.appendChild(joinRoomForm);
  root?.appendChild(style);

};

}

