import { ref } from "firebase/database";
import { db } from "../src/firebase.config";
import { state } from "../state/state";

export const p1Ref = ref( db,`rooms/${state.roomLargeId}/currentGame/${state.playerId}`);

export const p2Ref = ref(db,`rooms/${state.roomLargeId}/currentGame/${state.playerTwoId}`);

export const roomRef = ref(db, `rooms/${state.roomLargeId}/currentGame`);

