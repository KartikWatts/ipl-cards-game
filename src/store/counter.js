import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state, action) {
			state.value += action.payload;
		},
		decrement(state) {
			state.value--;
		},
	},
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
