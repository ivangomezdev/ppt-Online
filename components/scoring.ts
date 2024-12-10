import { state } from "../state/state";

class Scoring extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: "open" });
      const contTable = document.createElement("div");
      const tableTitle = document.createElement("h1");
      const resultPc = document.createElement("p");
      const resultMe = document.createElement("p");
      const styleTable = document.createElement("style");
  
      styleTable.textContent = `
        .cont__table{
          display: flex;
          flex-direction: column;
          align-items: center;
          border: solid 5px black;
          border-radius: 10px;
          background-color: white;
          padding: 2px 5px 5px 10px;
          width: 250px;
          height: 350px;
        }
        .results__text {
          font-size: 40px;
          font-weight: bold;
          text-align: end;
        }
        .results__title {
          font-size: 45px;
        }
      `;
  
      contTable.classList.add("cont__table");
      resultMe.classList.add("results__text");
      resultPc.classList.add("results__text");
      tableTitle.classList.add("results__title");
      tableTitle.textContent = "Score";
  
      const updateScores = () => {
        resultMe.textContent = `${state.playerNames.player1 || "Jugador1"}: ${state.matchCounter.me}`;
        resultPc.textContent = `${state.playerNames.player2 || "Jugador2"}: ${state.matchCounter.pc}`;
      };
  
      // Suscribe el componente a cambios en el estado
      state.subscribe(updateScores);
  
      // Render inicial
      updateScores();
  
      contTable.appendChild(styleTable);
      contTable.appendChild(tableTitle);
      contTable.appendChild(resultMe);
      contTable.appendChild(resultPc);
      shadow.appendChild(contTable);
    }
  }
  
  customElements.define("scoring-table", Scoring);
  