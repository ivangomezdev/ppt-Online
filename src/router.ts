const BASE_PATH = "/ppt-Online";
import { againPages } from "../pages/again";
import {inicioPage} from "../pages/inicio"
import { joinName } from "../pages/joinName";
import { joinRoom } from "../pages/joinRoom";
import { playPage } from "../pages/play";
import { shareRoom } from "../pages/shareCode";
import { waitOtherPlayer } from "../pages/waitOtherPlayer";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: Element) {
  function goTo(path: string) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
    const event = new Event("pushstate"); // Evento personalizado para notificar el cambio
    window.dispatchEvent(event);
  }

  function handleRoute(route: string) {
    console.log("El handleRoute recibió una nueva ruta", route);
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    const routes = [
      {
        route: "/",
        handle: () => {
          inicioPage();
        },
      },
      {
        route:"/joinRoom",
        handle: () =>{
          joinRoom()
        }
      },{
        route:"/joinName",
        handle:() =>{
          joinName()
        }
      },
      {
        route: "/howTo",
        handle: () => {
          howToPage();
        },
      }, {
        route: "/shareCode",
        handle: () => {
          shareRoom();
        },
      },{
        route: "/waitOtherPlayer",
        handle: () => {
          waitOtherPlayer();
        },
      },
      {
        route: "/play",
        handle: () => {
          playPage();
        },
      },
      {
        route: "/again",
        handle: () => {
          againPages();
        },
      },
      
      {
        route: "/result",
        handle: () => {
          ResultPage();
        },
      },
    ];

    let routeFound = false;
    for (const r of routes) {
      if (r.route === newRoute) {
        r.handle();
        routeFound = true;
        break;
      }
    }

    if (!routeFound) {
      console.log("Ruta no encontrada:", newRoute);
    }
  }

  // Detecta cambios en el historial y ejecuta handleRoute
  window.onpopstate = () => {
    handleRoute(location.pathname);
  };

  // Inicializa la ruta actual al cargar la página
  handleRoute(location.pathname);

  return { goTo };
}


const howToPage = () => {
  const root = document.getElementById("root") as HTMLElement;

  root.innerHTML = ""; // Limpiar cualquier contenido previo

  const startGame = document.querySelector("game-buttons") as HTMLElement;
  const startGameroot = startGame.shadowRoot as ShadowRoot;
  const startGamerootDiv = startGameroot.querySelector("div") as HTMLElement;
  startGamerootDiv.style = "display:flex";

  const gameButtons = document.querySelector("game-buttons") as HTMLElement;
  const content = gameButtons.shadowRoot?.querySelector("div");

  content?.classList.add("disabled");
  content?.classList.add("selected");
  // Insertar el componente <start-cont> en el contenedor
  const startGameComponent = document.createElement("instructive-cont");

  root.appendChild(startGameComponent); // Añadir el componente al DOM
};

/*const playPage = () => {
  const root = document.getElementById("root") as HTMLElement;
  const playCont = document.createElement("play-content");
  root.appendChild(playCont);

};/*/

const ResultPage = () => {
  const root = document.getElementById("root") as HTMLElement;
  root.innerHTML = "";
  const results = document.createElement("start-conts");
  root.appendChild(results);
};


