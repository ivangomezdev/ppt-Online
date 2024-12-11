import { ref, update } from "firebase/database";
import { goTo } from "../src";
import { state } from "../state/state";
import { db } from "../src/firebase.config";

export const playPage = () => {
  const root = document.querySelector("#root");
  const timerCont = document.createElement("p");
  const style = document.createElement("style");
  const gameButtons = document.querySelector("game-buttons");
  let interval: ReturnType<typeof setInterval> | null = null; // Variable para el intervalo
  let timerRunning = false; // Controla si el contador ya está activo
  let timer = 3; // Valor inicial del contador

  // Estilos de la página
  style.textContent = `
    .play-content {
      display: flex;
      justify-content: center;
    }

    .pTimer {
      position: relative;
      font-size: 60px;
      line-height: 1;
      color: #333;
      padding: 20px;
      text-align: center;
      margin-bottom:420px;
    }

    .pTimer::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 150px;
      border: 10px solid black;
      border-top: 5px solid #999;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }`
  ;

  // Lógica del contador
  const handleCounter = () => {
    if (timerRunning) return;
    timerRunning = true;
    timerCont.textContent = `${timer}`; // Muestra el valor inicial del contador
    

    interval = setInterval(() => {
      classManager();
      timer--;
      timerCont.textContent = `${timer}`;

      if (timerRunning === true && timer == 0 && (state.p1Choice == "" || state.p2Choice == "")) {
        timerCont.style.display = "none"; // Oculta el contador
        const p1Ref = ref( db,`rooms/${state.roomLargeId}/currentGame/${state.playerId}`);

        const updates = {
         choice:"",
         start:false
        }

        update(p1Ref, updates);
        
        goTo("/again")
        timerRunning = false;
      }

      if (timer === 0) {
        clearInterval(interval as NodeJS.Timeout); // Limpia el intervalo
        timerRunning = false;
        timerCont.style.display = "none"; // Oculta el contador
      }
    }, 1000);
  };

  // Maneja las clases y botones del juego
  const classManager = () => {
    if (gameButtons?.shadowRoot) {
      const style = document.createElement("style");
      const content = gameButtons.shadowRoot.querySelector("div");

      gameButtons.style.display = "flex";
      content?.classList.remove("disabled");

      style.textContent = `
        .rootStyle{
        margin-top: 550px;
        }
        .selected {
          display: none;
        }`
      ;
      gameButtons.shadowRoot.appendChild(style);
      root?.classList.add("rootStyle")
      content?.classList.add("display");
    }
  };

  // Evento en botones del juego
  gameButtons?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.matches(".button-class")) {
      console.log("Botón seleccionado");
    
    }
  });

  // Ejecutar el contador por primera vez
  handleCounter();
  console.log("ejecuto el timer de nuevo");
  
  // Agregar estilos y elementos al DOM
  root?.appendChild(style);
  root?.appendChild(timerCont);
  timerCont.classList.add("pTimer");

  // Limpieza al salir de la página
  return () => {
    if (interval) clearInterval(interval); // Limpia el intervalo
    root!.innerHTML = ""; // Limpia el contenido del root

  };
};
