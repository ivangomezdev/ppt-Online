function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t=globalThis,n={},a={},i=t.parcelRequireb11a;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequireb11a=i);var r=i.register;r("27Lyk",function(t,n){e(t.exports,"register",()=>a,e=>a=e);var a,i=new Map;a=function(e,t){for(var n=0;n<t.length-1;n+=2)i.set(t[n],{baseUrl:e,path:t[n+1]})}}),r("eSiuo",function(t,n){e(t.exports,"images",()=>d),e(t.exports,"resultado",()=>l);let a=new URL(i("gQvBo")).toString(),r=new URL(i("bsOtf")).toString(),o=new URL(i("jtu1A")).toString();var c=i("bczGJ"),p=i("hvdb3");let d=[{piedra:a,id:"piedra"},{papel:r,id:"papel"},{tijera:o,id:"tijera"}],l={victoria:c,derrota:p};class s extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=document.createElement("style");for(let e of(n.textContent=`
   .img__content {
  display: flex;
  gap: 70px;
  justify-content: center;
 
  bottom: 0; /* Asegura que est\xe9 en la parte inferior */
  left: 0; /* Alineado al inicio */
  width: 100%; /* Ocupa todo el ancho del contenedor */

  padding: 10px 0;
}


    .img__content img{
    width:80px;
    gap:330px;
    margin-top:30px
      bottom: 0; /* Asegura que est\xe9 en la parte inferior */
      left: 0; /* Alineado al inicio */
       width: 100%; /* Ocupa todo el ancho del contenedor */
      padding: 10px 0;
    }

    .img__content img:hover{
    transform: scale(1.1);
    }

 
 
.disabled {
  pointer-events: none; /* Bloquea la interacci\xf3n con la imagen */
  opacity: 0.5; /* Opcional: Cambia la opacidad para dar la sensaci\xf3n de inhabilitada

`,d)){let n=Object.values(e).toString(),a=document.createElement("img");a.src=n,a.id=e.id,t.appendChild(a)}t.classList.add("img__content"),t.classList.add("disabled"),e.appendChild(t),e.appendChild(n)}}customElements.define("game-buttons",s)}),r("gQvBo",function(e,t){e.exports=new URL("piedra.083177db.png",import.meta.url).toString()}),r("bsOtf",function(e,t){e.exports=new URL("papel.a18e2c61.png",import.meta.url).toString()}),r("jtu1A",function(e,t){e.exports=new URL("tijera.a063bb16.png",import.meta.url).toString()}),r("bczGJ",function(e,t){e.exports=new URL("victoria.ab8c5652.png",import.meta.url).toString()}),r("hvdb3",function(e,t){e.exports=new URL("derrota.dcc11aeb.png",import.meta.url).toString()}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["6PBqH","index.f6e6c5f0.js","6i9Py","victoria.ab8c5652.png","hhYb2","derrota.dcc11aeb.png","24qkM","piedra.083177db.png","56dIy","papel.a18e2c61.png","3BKn4","tijera.a063bb16.png"]')),i("eSiuo");
//# sourceMappingURL=index.f6e6c5f0.js.map
