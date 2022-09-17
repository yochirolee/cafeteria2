import {
	getProducts,
	deleteProductById,
	db_updateProduct,
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
	updateEntryProduct,
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

export const updateEntryProductThunks = (entry) => {
	return async (dispatch, getState) => {
		try {
			dispatch(updateEntryProduct(entry));
			const { selectedProduct } = getState().productsSlice;
			await db_updateProduct(selectedProduct);
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateProductThunks = (product) => {
	console.log(product, "product for update on thusnk");
	return async (dispatch) => {
		try {
			await db_updateProduct(product);
			dispatch(updateProduct(product));
		} catch (error) {
			console.log(error);
		}
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
//SALES THUNKS

export const getSalesThunks = (day) => {
	console.log(day, "getsates");
	return async (dispatch) => {
		dispatch(startLoadingSales());
		const { data: sales, error } = await db_getSalesByDay(day);
		dispatch(setSales(sales));
	};
};

export const saleProductThunks = (quantity_for_sell) => {
	return async (dispatch, getState) => {
		dispatch(saleProduct(quantity_for_sell));
		const { selectedProduct } = getState().productsSlice;
		const sale = await db_CreateSale(selectedProduct, quantity_for_sell);

		dispatch(createSale(sale));
		await db_updateProduct(selectedProduct);
	};

	/*return async (dispatch, getState) => {	
		dispatch(saleProduct(product.quantity_for_sell));
		
		
		const { selectedProduct } = getState().productsSlice;
		
	};*/
};
