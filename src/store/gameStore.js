import { createSlice } from "@reduxjs/toolkit";

const initialState = { playerCards: [], computerCards: [], isInTurn: false };

const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		setPlayerCards(state, action) {
			state.playerCards = action.payload;
		},
		setComputerCards(state, action) {
			state.computerCards = action.payload;
		},
		toggleTurn(state) {
			state.isInTurn = !state.isInTurn;
		},
	},
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
