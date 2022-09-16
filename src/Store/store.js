import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./Cafeteria/Slices";
import { uiSlice } from "./Cafeteria/Slices";
import { salesSlice } from "./Cafeteria/Slices/sales/salesSlice";

export const store = configureStore({
	reducer: {
		uiSlice: uiSlice.reducer,
		productsSlice: productsSlice.reducer,
		salesSlice: salesSlice.reducer,
	},
});
