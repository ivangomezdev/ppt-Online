var e=globalThis,t={},r={},o=e.parcelRequireb11a;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequireb11a=o),o.register;var a=o("gdelx"),n=o("eSiuo"),d=o("kOHZq"),s=o("joAEj"),l=o("6SeQg");class i extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),r=document.createElement("img"),o=document.createElement("button"),i=document.createElement("style"),c=document.createElement("style"),u=document.createElement("style"),p=document.querySelector(".index__cont"),g=document.createElement("scoring-table");(0,s.state).processResult(),i.textContent=`
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
          `,c.textContent=`
          .start__btn{
          width:320px;
          height:84px;
          background-color:#006CFC;
          border:solid 5px #001997;
          font-family: "Odibee Sans";
          color:#D8FCFC   ;
          border-radius:10px;
          font-size:45px
          }`,u.textContent=`
          .start__h1{
          width:280px;
          margin:0 auto;
          color:#009048;
         font-size:90px;
         text-align:start;
         font-weight:700;
         line-height: 1.1; 
         padding:60px
          }`,(0,s.state).results.includes("Victoria")?(r.src=n.resultado.victoria,t.style.backgroundColor="green",p.style.backgroundColor="green"):(0,s.state).results.includes("Derrota")?(r.src=n.resultado.derrota,p.style.backgroundColor="red"):(t.style.backgroundColor="orange",p.style.backgroundColor="orange"),p.style.width="400px",o.textContent="Volvé a jugar",o.id="0",t.classList.add("start__cont"),o.classList.add("start__btn"),r.classList.add("start__h1"),e.appendChild(u),e.appendChild(t),t.appendChild(r),t.appendChild(g),e.appendChild(c),t.appendChild(o),e.appendChild(i);let m=(0,a.ref)(l.db,`rooms/${s.state.roomLargeId}/currentGame/${s.state.playerId}`);(0,a.ref)(l.db,`rooms/${s.state.roomLargeId}/currentGame/${s.state.playerTwoId}`);let x={choice:"",start:!1};o.addEventListener("click",e=>{(0,d.goTo)("/howTo"),(0,s.state).resetState(),(0,a.update)(m,x)})}}customElements.define("start-conts",i);
//# sourceMappingURL=index.a20471b1.js.map
