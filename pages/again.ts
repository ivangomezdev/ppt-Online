import { goTo } from "../src/index";


const root = document.querySelector("#root") as HTMLElement;
const gameButtons = document.querySelector("game-buttons") as HTMLElement;



export const againPages = () => {
  const newEl = document.createElement("div");
  const text = document.createElement("p");
  const button = document.createElement("button");
  const style = document.createElement("style")

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
      },
      
      .start_text{
      font-size:80px;
      color:red
      }

  `

  gameButtons.style.display = "none";
  text.textContent = "Debes seleccionar una opción";
  button.textContent = "Jugar";
  button.classList.add("start__btn")
  text.classList.add("start__text")
  newEl.appendChild(style)
  newEl?.appendChild(text);
  newEl?.appendChild(button);


  

    button.addEventListener("click",(e)=>{
        goTo("/play")
       
    })

    if (window.location.pathname === '/again') {
        root?.appendChild(newEl);
        // Lógica para la ruta /again
      } else {
        console.log('No estás en la ruta /again');
      }

 
};
