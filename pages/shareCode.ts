import { goTo } from "../src";
import { state } from "../state/state";
import { get, onValue, ref } from "firebase/database";
import { db } from "../src/firebase.config";

export const shareRoom = () => {
  const root = document.querySelector("#root");

  const shareRoomTextCont = document.createElement("div");
  const style = document.createElement("style");

  shareRoomTextCont.innerHTML = `<h2>Compartí este código: </h2>
  <strong style="font-size: 70px;">${state.roomId}</strong> 
  <h2>con el otro jugador</h2>`;

  shareRoomTextCont.classList.add("shareRoomTextCont");
  // Crear estilos para los elementos
  style.textContent = `
 
      .shareRoomTextCont {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align:center;
        margin-bottom:200px;
        
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
    const dataVal = snapshot.val();
    let counter = 1;
    let allPlayersOnline = true; // Variable para verificar si ambos jugadores están en línea
    
    // Si hay 2 usuarios en la sala
    if (Object.keys(dataVal).length === 2) {
      for (const key in dataVal) {
        const element = dataVal[key];
        
        state.playerNames[`player${counter}`] = element.name;
        counter++;
  
        // Si encontramos que un jugador no está en línea, cambiamos la bandera
        if (element.online !== true) {
          allPlayersOnline = false;
        }
      }
      
      const p1Ref = ref( db,`rooms/${state.roomLargeId}/currentGame/${state.playerId}`)

    const myData =  get(p1Ref).then((data)=>{
         if (allPlayersOnline && state.p1Choice == "" && state.p2Choice == "" &&  (window.location.pathname == "/ppt-Online/shareCode" || window.location.pathname == "/shareCode")) {
          
          goTo("/howTo");
        }
        
      })

      // Si ambos jugadores están en línea, hacemos el redireccionamiento
  
    }
  });
};
