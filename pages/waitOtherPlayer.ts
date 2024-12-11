import { state } from "../state/state";
import { onValue, ref, update } from "firebase/database";
import { db } from "../src/firebase.config";
import { goTo } from "../src";
const customElement = document.querySelector("game-buttons");
const shadowElement = customElement?.shadowRoot;
const imgButton = shadowElement?.querySelectorAll("img");

export const waitOtherPlayer = () => {
  const root = document.querySelector("#root");

  const shareRoomTextCont = document.createElement("div");
  const style = document.createElement("style");

  //manejo el content depende quien sea el jugador que falta presionar START
  if (state.name == state.playerNames.player1) {
    shareRoomTextCont.innerHTML = `<h2>Esperando a que</h2>
    <strong style="font-size: 70px;">${state.playerNames.player2}</strong> 
    <h2>Presione el botón: Jugar</h2>`;
  } else {
    shareRoomTextCont.innerHTML = `<h2>Esperando a que</h2>
    <strong style="font-size: 70px;">${state.playerNames.player1}</strong> 
    <h2>Presione el botón: Jugar</h2>`;
  }

  shareRoomTextCont.classList.add("shareRoomTextCont");
  // Crear estilos para los elementos
  style.textContent = `
 
      .shareRoomTextCont {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align:center;
        margin-bottom:190px;
        
      }
      
      h2 {
        font-size:50px      
      }
    `;

  if (root) {
    root.innerHTML = " ";

    root.appendChild(shareRoomTextCont);
    root.appendChild(style);
  }

  const roomRef = ref(db, `rooms/${state.roomLargeId}/currentGame`);

  onValue(roomRef, (snapshot) => {
    const data = snapshot.val();
    if (
      data[state.playerId].start == true &&
      data[state.playerTwoId].start == true &&
      state.p1Choice == "" &&
      state.p2Choice == "" &&
      (window.location.pathname == "/waitOtherPlayer" ||
        window.location.pathname == "/ppt-online/waitOtherPlayer")
    ) {
      if (root) {
        root.innerHTML = " ";
        goTo("/play");
      }
     
    }
  });
};
