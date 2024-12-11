import { onValue, ref } from "firebase/database";
import { goTo } from "../src";
import { state } from "../state/state";
import { db } from "../src/firebase.config";


export const joinName = () => {
  const title = document.createElement("title-create");
  const btns = document.createElement("button");
  const inputJoin = document.createElement("input");
  const containerJoin = document.createElement("form");
  const style = document.createElement("style");
  const root = document.querySelector("#root");

  //url Fetch
  const URL__JOINROOM = "http://localhost:3000/joinRoom";

  //agrego styles
  style.textContent = `
        
        .jnameContainer {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items:center
        }
        
        .jnameInput {
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
        
        .jButton {
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
    
      .jButton:hover {
        background-color: #005bb5;
      };


    `;

  //agrego las clases
  inputJoin.classList.add("jnameInput");
  containerJoin.classList.add("jnameContainer");
  btns.classList.add("jButton");

  //agrego los textos
  inputJoin.placeholder = "Ingresá tú nombre";
  btns.textContent = "Jugar";

  //val requerida TRUE
  inputJoin.required = true

  //capturar value
  containerJoin.addEventListener("submit", (e) => {
    e.preventDefault();
    state.name = inputJoin.value;
    fetch(URL__JOINROOM, {
      method: "POST", // Método de la petición
      body: JSON.stringify({
        playerName: state.name,
        idRoom: state.roomId,
      }),
      headers: {
        "Content-Type": "application/json", // Tipo de contenido
      },
    }).then((res) => {
      res.json().then((data) => {
        state.roomLargeId = data.idRoom;
        state.playerId = data.playerId;
        const roomRef = ref(db, `rooms/${state.roomLargeId}/currentGame`);

        onValue(roomRef, (snapshot) => {
          const dataVal = snapshot.val();
          console.log(dataVal);

          let counter = 1;
          //si hay 2 usuarios en la sala
          if (Object.keys(dataVal).length == 2) {
            

            //sacamos el ID Del player 2
            const player2 = Object.keys(dataVal).find(
              (e) => e !== state.playerId
            );

            state.playerTwoId = player2;

            for (const key in dataVal) {
              const element = dataVal[key];
              
              state.playerNames[`player${counter}`] = element.name;
              counter++;
            }
          }
        });
      });
    });

    
    
    if (state.createNewRoom == true) {
      goTo("/shareCode");
    } else {
      goTo("/howTo");
    }
  });

  if (root) {
    root.textContent = "";

    containerJoin.appendChild(title);
    containerJoin.appendChild(inputJoin);
    containerJoin.appendChild(btns);
    root.appendChild(style);
    root.appendChild(containerJoin);
  }
};
