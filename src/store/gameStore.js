import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	playerCards: [],
	computerCards: [],
	isInTurn: false,
	changesDone: false,
	turnOf: "player",
	dataSelected: null,
	otherData: null,
};

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
		setCardData(state, action) {
			state.dataSelected = action.payload;
		},
		setChangesDone(state, action) {
			state.changesDone = action.payload;
		},
	},
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
