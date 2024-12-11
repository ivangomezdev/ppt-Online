import { ref, update } from "firebase/database";
import { goTo } from "../src/index";
import { state } from "../state/state";
import { db } from "../src/firebase.config";


const root = document.querySelector("#root") as HTMLElement;
const gameButtons = document.querySelector("game-buttons") as HTMLElement;



export const againPages = () => {
  const newEl = document.createElement("div");
  const text = document.createElement("p");
  const button = document.createElement("button");
  const style = document.createElement("style")
  const textStyle = document.createElement("style")

  style.textContent = `
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

 

  `
  textStyle.textContent = `
  .start__text{
    font-size:60px;
    width:300px
      }

    .start__container{
    gap:50px
    }
  `

  gameButtons.style.display = "none";
  text.textContent = "Uno de los jugadores NO eligio una opción";
  button.textContent = "Entendido";
  button.classList.add("start__btn")
  text.classList.add("start__text")
  newEl.classList.add("start__container")

  newEl.appendChild(style)
  newEl.appendChild(textStyle)
  newEl?.appendChild(text);
  newEl?.appendChild(button);


  const p1Ref = ref( db,`rooms/${state.roomLargeId}/currentGame/${state.playerId}`);

  const updates = {
   choice:"",
   start:false
  }
   
    button.addEventListener("click",(e)=>{
      goTo("/howTo");
      state.resetState();
      update(p1Ref, updates);
       
    })
  console.log(window.location.pathname);
  

    if (window.location.pathname === '/ppt-Online/again') {
      console.log("page cargada");
      
        root?.appendChild(newEl);
        // Lógica para la ruta /again
      } 

 
};
