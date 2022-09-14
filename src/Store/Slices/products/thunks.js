import { getProducts, deleteProductById, updateProductById } from "../../../supabase/products_lib";
import { startLoadingProducts, updateProduct, setProducts, deleteProduct } from "./productsSlice";

export const getProductsThunks = () => {
	return async (dispatch) => {
		dispatch(startLoadingProducts());
		const { data, error } = await getProducts();
		dispatch(setProducts({ products: data }));
	};
};

export const updateProductThunks = (product) => {
	return async (dispatch) => {
		try {
			const { data, error } = await updateProductById(product);
			dispatch(updateProduct(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteProductThunks = (product_id) => {
	return async (dispatch) => {
		try {
			const { data, error } = await deleteProductById(product_id);
			dispatch(deleteProduct(product_id));
		} catch (error) {
			console.log(error.message);
		}
	};
};
