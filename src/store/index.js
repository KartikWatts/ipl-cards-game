import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import gameReducer from "./gameStore";

const store = configureStore({
	reducer: { counter: counterReducer, game: gameReducer },
});

export default store;
