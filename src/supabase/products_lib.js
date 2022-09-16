import { supabase } from "../supabase/supabaseClient";

export const getProducts = async () => {
	const { data, error } = await supabase.from("c_products").select("*").order("name");
	return { data, error };
};

export const insertNewProduct = async (product) => {
	const { data, error } = await supabase.from("c_products").insert([product]);

	return { data, error };
};

export const deleteProductById = async (product_id) => {
	const { data, error } = await supabase.from("c_products").delete().eq("id", product_id);
	return { data, error };
};

export const updateProductById = async (product) => {
	const { data, error } = await supabase.from("c_products").update(product).eq("id", product.id);
	return { data, error };
};


//SALES

export const db_getSales = async () => {
	const { data, error } = await supabase.from("c_sales").select("*").order("sale_at");
	return { data, error };
};

export const db_CreateSale = async (product) => {
	const sale = {
		product_id: product.id,
		product_name: product.name,
		quantity_sold: product.quantity_for_sell,
		price_sell: product.price_sell,
	};

	const { data, error } = await supabase.from("c_sales").insert([sale]);
	if (error) console.log(error);
	return data[0];
};
