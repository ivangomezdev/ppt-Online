var e=globalThis,t={},o={},n=e.parcelRequireb11a;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequireb11a=n),(0,n.register)("hgN4D",function(e,t){Object.defineProperty(e.exports,"playPage",{get:()=>o,set:void 0,enumerable:!0,configurable:!0});let o=()=>{let e=document.querySelector("#root"),t=document.createElement("p"),o=document.createElement("style"),n=document.querySelector("game-buttons"),r=null,l=!1,a=4;o.textContent=`
    .play-content {
      display: flex;
      justify-content: center;
    }

    p {
      position: relative;
      font-size: 60px;
      line-height: 1;
      color: #333;
      padding: 20px;
      text-align: center;
      margin-bottom:420px;
    }

    p::before {
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
    }`;let i=()=>{if(n?.shadowRoot){let t=document.createElement("style"),o=n.shadowRoot.querySelector("div");n.style.display="flex",o?.classList.remove("disabled"),t.textContent=`
        .rootStyle{
        margin-top: 550px;
        }
        .selected {
          display: none;
        }`,n.shadowRoot.appendChild(t),e?.classList.add("rootStyle"),o?.classList.add("display")}};return n?.addEventListener("click",e=>{e.target.matches(".button-class")&&console.log("Botón seleccionado")}),l||(l=!0,t.textContent=`${a}`,t.style.display="block",r=setInterval(()=>{i(),a--,t.textContent=`${a}`,0===a&&(clearInterval(r),l=!1,t.style.display="none")},1e3)),e?.appendChild(o),e?.appendChild(t),t.classList.add("pTimer"),()=>{r&&clearInterval(r),e.innerHTML=""}}}),n("hgN4D");
//# sourceMappingURL=index.10a4a292.js.map
