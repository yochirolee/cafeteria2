import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./Slices/products";
import { uiSlice } from "./Slices/ui";

export const store = configureStore({
	reducer: {
		uiSlice: uiSlice.reducer,
		productsSlice: productsSlice.reducer,
	},
});
