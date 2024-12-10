class e extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("h1"),n=document.createElement("style");n.textContent=`
        .start__h1 {
      width: 280px;
      margin: 0 auto;
      color: #009048;
      font-size: 90px;
      text-align: center;
      font-weight: 700;
      line-height: 1.1;
      padding: 60px;
    }
    `,t.textContent="Piedra Papel Tijeras",t.classList.add("start__h1"),e.appendChild(n),e.appendChild(t)}}customElements.define("title-create",e);
//# sourceMappingURL=index.1f2ae279.js.map
