import { createSlice } from "@reduxjs/toolkit";
export const salesSlice = createSlice({
	name: "sales",
	initialState: {
		isLoadingSales: false,
		sales: [],
	},
	reducers: {
		setIsOnSale: (state) => {
			state.isLoadingSales = !state.isLoadingSales;
		},
		startLoadingSales: (state, action) => {
			state.isLoadingSales = true;
		},

		setSales: (state, action) => {
			state.sales = action.payload;
			state.isLoadingSales = false;
		},
		createSale: (state, action) => {
			state.sales.push(action.payload);
		},
	},
});

export const { setIsOnSale, createSale, startLoadingSales, setSales } = salesSlice.actions;
