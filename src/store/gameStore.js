import { createSlice } from "@reduxjs/toolkit";

const initialState = { cards: [], isInTurn: false };

const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		setCards(state, action) {
			state.cards = action.payload;
		},
		toggleTurn(state) {
			state.isInTurn = !state.isInTurn;
		},
	},
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
