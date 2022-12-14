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

		updateEntryProduct: (state, action) => {
			state.products.map((product) => {
				if (product.id === state.selectedProduct.id) {
					product.entry += parseInt(action.payload);
					product.quantity += parseInt(action.payload);
					state.selectedProduct = product;
				}
			});
		},

		saleProduct: (state, action) => {
			state.products.map((product) => {
				if (
					product.id === state.selectedProduct.id &&
					parseInt(product.quantity) - parseInt(action.payload) >= 0
				) {
					product.quantity_sold += parseInt(action.payload);
					product.quantity -= parseInt(action.payload);
					state.selectedProduct = product;
				}
			});
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
	saleProduct,
	updateEntryProduct,
} = productsSlice.actions;
