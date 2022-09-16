import {
	getProducts,
	deleteProductById,
	updateProductById,
	insertNewProduct,
	db_CreateSale,
	db_getSalesByDay,
} from "../../../../supabase/products_lib";
import { createSale, setSales, startLoadingSales } from "../sales/salesSlice";
import {
	startLoadingProducts,
	updateProduct,
	setProducts,
	deleteProduct,
	insertProduct,
	saleProduct,
} from "./productsSlice";

export const getProductsThunks = () => {
	return async (dispatch) => {
		dispatch(startLoadingProducts());
		const { data, error } = await getProducts();
		dispatch(setProducts({ products: data }));
	};
};

export const insertProductThunks = (product) => {
	return async (dispatch) => {
		try {
			const { data, error } = await insertNewProduct(product);
			dispatch(insertProduct(data[0]));
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateProductThunks = (product) => {
	return async (dispatch) => {
		try {
			await updateProductById(product);
			dispatch(updateProduct(product));
		} catch (error) {
			console.log(error);
		}
	};
};

//SALES THUNKS

export const getSalesThunks = (day) => {
	console.log(day, "getsates");
	return async (dispatch) => {
		dispatch(startLoadingSales());
		const { data: sales, error } = await db_getSalesByDay(day);
		dispatch(setSales(sales));
	};
};

export const saleProductThunks = (product) => {
	return async (dispatch, getState) => {
		dispatch(saleProduct(product.quantity_for_sell));
		const sale = await db_CreateSale(product);
		dispatch(createSale(sale));
		const { selectedProduct } = getState().productsSlice;
		await updateProductById(selectedProduct);
	};
};

export const deleteProductThunks = (product_id) => {
	return async (dispatch) => {
		try {
			await deleteProductById(product_id);
			dispatch(deleteProduct(product_id));
		} catch (error) {
			console.log(error.message);
		}
	};
};
