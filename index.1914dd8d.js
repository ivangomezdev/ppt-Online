var e=globalThis,t={},r={},n=e.parcelRequireb11a;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequireb11a=n),(0,n.register)("9jo0z",function(e,t){Object.defineProperty(e.exports,"inicioPage",{get:()=>a,set:void 0,enumerable:!0,configurable:!0});let r=document.querySelector("#root"),n=document.createElement("div"),o=document.createElement("title-create"),i=document.createElement("btn-create"),c=document.createElement("btn-create"),a=()=>{let e=document.createElement("style");i.btnText="Crear Room",c.btnText="Join Room",l(e),n.classList.add("start__cont"),r?.appendChild(e),r?.appendChild(o),n.appendChild(i),n.appendChild(c),r?.appendChild(n)},l=e=>{e.textContent=`
    .start__cont {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      
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
  

  `};a()}),n("9jo0z");
//# sourceMappingURL=index.1914dd8d.js.map
