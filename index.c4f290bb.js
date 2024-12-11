var e=globalThis,t={},o={},r=e.parcelRequireb11a;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequireb11a=r),r.register;var n=r("kOHZq"),a=r("joAEj");class s extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("button"),o=document.createElement("style");t.textContent=this.btnText,"Join Room"==this.btnText?t.addEventListener("click",e=>{a.state.createNewRoom=!1,(0,n.goTo)("/joinRoom")}):"Crear Room"==this.btnText&&t.addEventListener("click",e=>{a.state.createNewRoom=!0,(0,n.goTo)("/joinName"),fetch("https://ppt-onlineserver.onrender.com/createRoom",{method:"POST",headers:{"Content-Type":"application/json"}}).then(e=>{e.json().then(e=>{a.state.roomId=e.dbId,a.state.roomLargeId=e.dbIdLarge})}).catch(e=>{console.log(e)})}),o.textContent=`
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
`,t.classList.add("start__btn"),e.appendChild(o),e.appendChild(t)}}customElements.define("btn-create",s);
//# sourceMappingURL=index.c4f290bb.js.map
