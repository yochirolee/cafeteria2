import {
	getProducts,
	deleteProductById,
	updateProductById,
	insertNewProduct,
	db_CreateSale,
	db_getSales,
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

export const getSalesThunks = () => {
	return async (dispatch) => {
		dispatch(startLoadingSales());
		const { data: sales, error } = await db_getSales();
		dispatch(setSales(sales));
	};
};

export const saleProductThunks = (product) => {
	console.log(product, "at sale Product Thnks");
	return async (dispatch, getState) => {
		dispatch(saleProduct(product.quantity_for_sell));

		const sale = await db_CreateSale(product);
		console.log(sale, "on Thunks");

		dispatch(createSale(sale));
		//create Sale on DB table sales
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
