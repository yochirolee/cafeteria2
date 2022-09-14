import { getProducts, deleteProductById } from "../../../supabase/products_lib";
import { startLoadingProducts, setProducts, deleteProduct } from "./productsSlice";

export const getProductsThunks = () => {
	return async (dispatch) => {
		dispatch(startLoadingProducts());
		const { data, error } = await getProducts();
		dispatch(setProducts({ products: data }));
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
