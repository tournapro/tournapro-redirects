import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import registerPlayerSlice from "./registerPlayerSlice";
import teamSlice from "./teamSlice";
import tournamentSlice from "./tournamentSlice";

export const store = configureStore({
  reducer: {
    tournament: tournamentSlice,
    generalData: dataSlice,
    player: registerPlayerSlice,
    team: teamSlice
  },
});
