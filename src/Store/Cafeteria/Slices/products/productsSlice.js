import { createSlice } from "@reduxjs/toolkit";
export const productsSlice = createSlice({
	name: "products",
	initialState: {
		page: 0,
		isLoading: false,
		selectedProduct: null,
		products: [],
	},
	reducers: {
		startLoadingProducts: (state, action) => {
			state.isLoading = true;
		},

		setProducts: (state, action) => {
			(state.isLoading = false), (state.products = action.payload.products);
		},
		insertProduct: (state, action) => {
			state.products.push(action.payload);
		},
		setSelectedProduct: (state, action) => {
			state.selectedProduct = action.payload;
		},
		updateProduct: (state, action) => {
			state.products = state.products.map((product) =>
				product.id === action.payload.id ? action.payload : product,
			);
		},
		deleteProduct: (state, action) => {
			state.products = state.products.filter((product) => product.id !== action.payload);
		},
	},
});

export const {
	newProduct,
	insertProduct,
	updateProduct,
	deleteProduct,
	startLoadingProducts,
	setProducts,
	setSelectedProduct,
} = productsSlice.actions;