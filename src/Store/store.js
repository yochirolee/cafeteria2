import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./Cafeteria/Slices";
import { uiSlice } from "./Cafeteria/Slices";

export const store = configureStore({
	reducer: {
		uiSlice: uiSlice.reducer,
		productsSlice: productsSlice.reducer,
	},
});
