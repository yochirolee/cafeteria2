import { createSlice } from "@reduxjs/toolkit";
export const productsSlice = createSlice({
	name: "products",
	initialState: {
		page: 0,
		isLoading: false,
		products: [],
	},
	reducers: {
		startLoadingProducts: (state, action) => {
			state.isLoading = true;
		},

		setProducts: (state, action) => {
			(state.isLoading = false), (state.products = action.payload.products);
			console.log(action.payload, "payload");
			console.log(action, "action");
		},
		insertProduct: (state, action) => {},
		updateProduct: (state, action) => {},
		deleteProduct: (state, action) => {},
	},
});

export const { newProduct, updateProduct, deleteProduct, startLoadingProducts, setProducts } =
	productsSlice.actions;
