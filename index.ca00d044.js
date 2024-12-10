var e=globalThis,t={},a={},r=e.parcelRequireb11a;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},e.parcelRequireb11a=r),r.register;var n=r("joAEj");class s extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),a=document.createElement("h1"),r=document.createElement("p"),s=document.createElement("p"),l=document.createElement("style");l.textContent=`
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
      `,t.classList.add("cont__table"),s.classList.add("results__text"),r.classList.add("results__text"),a.classList.add("results__title"),a.textContent="Score";let o=()=>{s.textContent=`${n.state.playerNames.player1||"Jugador1"}: ${n.state.matchCounter.me}`,r.textContent=`${n.state.playerNames.player2||"Jugador2"}: ${n.state.matchCounter.pc}`};(0,n.state).subscribe(o),o(),t.appendChild(l),t.appendChild(a),t.appendChild(s),t.appendChild(r),e.appendChild(t)}}customElements.define("scoring-table",s);
//# sourceMappingURL=index.ca00d044.js.map
