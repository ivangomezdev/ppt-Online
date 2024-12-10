import { initRouter } from "./router";


// Inicializas el router
const router = initRouter(document.querySelector("#root")!);

// Exportas `goTo` para que esté disponible globalmente
export const goTo = router.goTo;