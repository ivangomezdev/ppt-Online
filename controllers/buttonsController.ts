import { onValue, ref, update } from "firebase/database";
import { images } from "../components/pptButtons";
import { state } from "../state/state";
import { db } from "../src/firebase.config";
import { goTo } from "../src";

// Llamo a customElement de buttons
const customElement = document.querySelector("game-buttons");
const shadowElement = customElement?.shadowRoot;
const imgButton = shadowElement?.querySelectorAll("img");

// Llamo a Root
const root = document.getElementById("root") as HTMLElement;

// Creo styles
const style = document.createElement("style");

// Encargado de manejar las opciones
const handleButtons = () => {
  imgButton?.forEach((e) => {
    e.addEventListener("click", (event: any) => {
      state.p1Choice = event.target.id;

      const updates = {
        choice: event.target.id,
      };
      const p1Ref = ref(
        db,
        `rooms/${state.roomLargeId}/currentGame/${state.playerId}`
      );
      update(p1Ref, updates);

      disableOtherButtons(e);
      showPcButton();
    });
  });
};

// Función para deshabilitar otros botones después de hacer una elección
const disableOtherButtons = (selectedButton) => {
  imgButton?.forEach((button) => {
    if (button !== selectedButton) {
      button.style = "display:none";
    }
  });
};

const resetButtons = () => {
  imgButton?.forEach((button) => {
    button.style = ""; // Restablece los estilos predeterminados
  });

  handleButtons();
};

// Si estoy en /howTo activar los botones nuevamente
const checkRoute = () => {
  const currentPath = window.location.pathname; // ruta actual

  if (currentPath === "/howTo") {
    resetButtons();
  }
};

// Escuchar cambios en la URL
window.addEventListener("popstate", checkRoute);
window.addEventListener("pushstate", checkRoute);

const updateData = () => {
  const p1Ref = ref(
    db,
    `
    rooms/${state.roomLargeId}/currentGame/${state.playerId}`
  );

  const updates = {
    start: false,
  };

  update(p1Ref, updates)
    .then(() => {
      console.log("data OK");
    })
    .catch((error) => {
      console.error("Error al actualizar el campo:", error);
    });
};

// Mostrar la elección de p2
const showPcButton = () => {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }

  const p2Ref = ref(
    db,
    `rooms/${state.roomLargeId}/currentGame/${state.playerTwoId}`
  );

  // Escucha el valor de p2Choice y actualiza el estado
  onValue(p2Ref, (snapshot) => {
    const p2Choice = snapshot.val()?.choice || ""; // Evita valores undefined

    if (p2Choice !== state.p2Choice) {
      state.p2Choice = p2Choice;
      updatePcChoiceImage(p2Choice);
    }
  });
};

// Actualiza la imagen de Player
const updatePcChoiceImage = (choice: string) => {
  const addPcImage = document.createElement("img");
  const waitOtherText = document.createElement("h3");
  waitOtherText.textContent = "Espera al otro jugador";

  style.textContent = `
    .pcChoiceSelect {
      width: 80px;
      transform: rotate(180deg);
      margin: 120px auto;
      text-align: center;
      align-items: center;
    }`;
  addPcImage.classList.add("pcChoiceSelect");
  root.appendChild(style);

  // Buscar la imagen correspondiente a la elección de P2
  for (const element of images) {
    if (choice === element.id) {
      addPcImage.src = element[element.id];
      break;
    }
  }

  // Mostrar la imagen
  if (choice !== "") {
    if (state.p1Choice !== "" && state.p2Choice !== "") {
      root.appendChild(addPcImage);
    }
   

    setTimeout(function () {
      goTo("/result");
      
      updateData();
    }, 3000);
  } else if (state.p2Choice == "" && choice !== ""){
    root.appendChild(waitOtherText);
  }
};

resetButtons();
