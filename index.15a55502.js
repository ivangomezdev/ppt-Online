var e=globalThis,t={},o={},r=e.parcelRequireb11a;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequireb11a=r),(0,r.register)("5jtAd",function(e,t){Object.defineProperty(e.exports,"resetButtons",{get:()=>g,set:void 0,enumerable:!0,configurable:!0});var o=r("gdelx"),a=r("eSiuo"),n=r("joAEj"),i=r("6SeQg"),l=r("kOHZq");let d=document.querySelector("game-buttons"),c=d?.shadowRoot,s=c?.querySelectorAll("img"),p=document.getElementById("root"),u=document.createElement("style"),m=()=>{s?.forEach(e=>{e.addEventListener("click",t=>{n.state.p1Choice=t.target.id;let r={choice:t.target.id},a=o.ref(i.db,`rooms/${n.state.roomLargeId}/currentGame/${n.state.playerId}`);o.update(a,r),h(e),E()})})},h=e=>{s?.forEach(t=>{t!==e&&(t.style="display:none")})},g=()=>{s?.forEach(e=>{e.style=""}),m()},f=()=>{let e=window.location.pathname;("/ppt-Online/howTo"===e||"/howTo"===e)&&g()};window.addEventListener("popstate",f),window.addEventListener("pushstate",f);let C=()=>{let e=(0,o.ref)(i.db,`
    rooms/${n.state.roomLargeId}/currentGame/${n.state.playerId}`);(0,o.update)(e,{start:!1}).then(()=>{console.log("data OK")}).catch(e=>{console.error("Error al actualizar el campo:",e)})},E=()=>{for(;p.firstChild;)p.removeChild(p.firstChild);let e=(0,o.ref)(i.db,`rooms/${n.state.roomLargeId}/currentGame/${n.state.playerTwoId}`);(0,o.onValue)(e,e=>{let t=e.val()?.choice||"";t!==n.state.p2Choice&&(n.state.p2Choice=t,w(t))})},w=e=>{let t=document.createElement("img"),o=document.createElement("h3");for(let r of(o.textContent="Espera al otro jugador",u.textContent=`
    .pcChoiceSelect {
      width: 80px;
      transform: rotate(180deg);
      margin: 120px auto;
      text-align: center;
      align-items: center;
    }`,t.classList.add("pcChoiceSelect"),p.appendChild(u),a.images))if(e===r.id){t.src=r[r.id];break}""!==e?(""!==n.state.p1Choice&&""!==n.state.p2Choice&&p.appendChild(t),setTimeout(function(){(0,l.goTo)("/result"),C()},3e3)):""==n.state.p2Choice&&""!==e&&p.appendChild(o)};g()}),r("5jtAd");
//# sourceMappingURL=index.15a55502.js.map
