var t=globalThis,e={},o={},r=t.parcelRequireb11a;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in o){var r=o[t];delete o[t];var n={id:t,exports:{}};return e[t]=n,r.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},t.parcelRequireb11a=r),r.register;var n=r("kOHZq"),a=r("joAEj");class s extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"}),e=document.createElement("button"),o=document.createElement("style");e.textContent=this.btnText,"Join Room"==this.btnText?e.addEventListener("click",t=>{a.state.createNewRoom=!1,(0,n.goTo)("/joinRoom")}):"Crear Room"==this.btnText&&e.addEventListener("click",t=>{a.state.createNewRoom=!0,(0,n.goTo)("/joinName"),fetch("http://localhost:3000/createRoom",{method:"POST",headers:{"Content-Type":"application/json"}}).then(t=>{t.json().then(t=>{a.state.roomId=t.dbId,a.state.roomLargeId=t.dbIdLarge})}).catch(t=>{console.log(t)})}),o.textContent=`
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
        margin-bottom: 10px;
      }
    
      .start__btn:hover {
        background-color: #005bb5;
      };
`,e.classList.add("start__btn"),t.appendChild(o),t.appendChild(e)}}customElements.define("btn-create",s);
//# sourceMappingURL=index.ce0babb4.js.map
