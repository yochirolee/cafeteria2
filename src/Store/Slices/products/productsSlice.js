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
		insertProduct: (state, action) => {},
		setSelectedProduct: (state, action) => {
			state.selectedProduct = action.payload;
		},
		updateProduct: (state, action) => {},
		deleteProduct: (state, action) => {
			state.products = state.products.filter((product) => product.id !== action.payload);
		},
	},
});

export const { newProduct, updateProduct, deleteProduct, startLoadingProducts, setProducts,setSelectedProduct } =
	productsSlice.actions;
