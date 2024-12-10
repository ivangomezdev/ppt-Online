var e=globalThis,t={},r={},o=e.parcelRequireb11a;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequireb11a=o),o.register;var a=o("gdelx"),n=o("kOHZq"),l=o("6SeQg"),s=o("joAEj");class c extends HTMLElement{constructor(){super();let e=document.querySelector("#root");e&&(e.innerHTML="");let t=document.createElement("div"),r=document.createElement("h1"),o=document.createElement("button"),c=document.querySelector(".index__cont"),i=document.createElement("style");r.textContent=`Presion\xe1 jugar
y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.`,o.textContent="Jugar",o.setAttribute("aria-label","Empezar juego"),i.textContent=`
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
    `,t.classList.add("start__cont"),o.classList.add("start__btn"),r.classList.add("start__h1"),o.addEventListener("click",e=>{let t=(0,a.ref)(l.db,`rooms/${s.state.roomLargeId}/currentGame/${s.state.playerId}`);(0,a.update)(t,{start:!0}).then(()=>{console.log("Campo actualizado correctamente."),(0,n.goTo)("/waitOtherPlayer")}).catch(e=>{console.error("Error al actualizar el campo:",e)})});let d=(0,a.ref)(l.db,`rooms/${s.state.roomLargeId}/currentGame`);(0,a.get)(d).then(e=>{let t=e.val(),r=1;if(2==Object.keys(t).length)for(let e in t){let o=t[e];s.state.playerNames[`player${r}`]=o.name,r++}}),e.appendChild(i),t.appendChild(r),t.appendChild(o),e.appendChild(t),c.style.backgroundColor="rgba(255, 255, 255, 0)"}}customElements.define("instructive-cont",c);
//# sourceMappingURL=index.ade7c3b0.js.map
