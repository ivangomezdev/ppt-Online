// Crear los elementos



const root = document.querySelector("#root");
const cont = document.createElement("div");
const title = document.createElement("title-create")
const btnCreate = document.createElement("btn-create") as Btns;
const btnJoin = document.createElement("btn-create") as Btns;

export const inicioPage = () => {

  // Crear estilo único y consolidado
  const style = document.createElement("style");
  
  // Agregar contenido
 


  btnCreate.btnText = 'Crear Room';

  btnJoin.btnText = 'Join Room';


  
  homeStyles(style)
 
  // Agregar clases y elementos al contenedor
  cont.classList.add("start__cont");



  // Append a mi root
  root?.appendChild(style);
  root?.appendChild(title)
  cont.appendChild(btnCreate);
  cont.appendChild(btnJoin);
  root?.appendChild(cont);



}

  


const homeStyles = ( style ) => {
  // Estilos CSS en un solo bloque
  style.textContent = `
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
  

  `;
};

inicioPage()