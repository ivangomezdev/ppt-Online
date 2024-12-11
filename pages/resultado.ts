import { ref, update } from "firebase/database";
import { resultado } from "../components/pptButtons";
import { goTo } from "../src/index.ts";
import { state } from "../state/state";
import { db } from "../src/firebase.config.js";

class StartGames extends HTMLElement {
  constructor() {
    super();

    //creo los contenedores-styles // create a container and styles
    const shadow = this.attachShadow({ mode: "open" });
    const cont = document.createElement("div");
    const title = document.createElement("img");
    const btn = document.createElement("button");
    const style = document.createElement("style");
    const btnStyle = document.createElement("style");
    const h1Style = document.createElement("style");
    const buttonsCont = document.querySelector(".index__cont") as HTMLElement


    //llamo a mi ScoringTable // call my scoringTable
    const scoringTable = document.createElement("scoring-table");

    state.processResult();

    //Modifico su contenido // edit the content
    style.textContent = `
          .start__cont{
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:"center";
          background-color:red;
          width:100%;
          padding-bottom:190px;
          gap:60px
          }
          `;

    btnStyle.textContent = `
          .start__btn{
          width:320px;
          height:84px;
          background-color:#006CFC;
          border:solid 5px #001997;
          font-family: "Odibee Sans";
          color:#D8FCFC   ;
          border-radius:10px;
          font-size:45px
          }`;

    h1Style.textContent = `
          .start__h1{
          width:280px;
          margin:0 auto;
          color:#009048;
         font-size:90px;
         text-align:start;
         font-weight:700;
         line-height: 1.1; 
         padding:60px
          }`;

    //ingreso el contenido de cada Element // Im going to put all the content of my element.

    if (state.results.includes("Victoria")) {
      title.src = resultado.victoria;
      cont.style.backgroundColor = "green";
      buttonsCont.style.backgroundColor ="green"
       buttonsCont.style.width ="400px"

    } else if (state.results.includes("Derrota")) {
      title.src = resultado.derrota;
       buttonsCont.style.backgroundColor ="red"
        buttonsCont.style.width ="400px"
      } else {
        cont.style.backgroundColor = "orange";
        buttonsCont.style.backgroundColor ="orange"
        buttonsCont.style.width ="400px"
    }

    btn.textContent = "Volvé a jugar";
    btn.id = "0";

    //adhiero el style y le hago append a mi shadow // add my style and make append to my shadow
    cont.classList.add("start__cont");
    btn.classList.add("start__btn");
    title.classList.add("start__h1");
    shadow.appendChild(h1Style);
    shadow.appendChild(cont);
    cont.appendChild(title);
    cont.appendChild(scoringTable);

    shadow.appendChild(btnStyle);
    cont.appendChild(btn);



    shadow.appendChild(style);

     const p1Ref = ref( db,`rooms/${state.roomLargeId}/currentGame/${state.playerId}`);


     const updates = {
      choice:"",
      start:false
     }
     
    btn.addEventListener("click", (e) => {
      goTo("/howTo");
      state.resetState();
      update(p1Ref, updates);
      
    });
  }
}
//defino el component // define my component
customElements.define("start-conts", StartGames);
