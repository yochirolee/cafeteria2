import { supabase } from "../supabase/supabaseClient";

export const getProducts = async () => {
	const { data, error } = await supabase.from("c_products").select("*").order("name");
	return { data, error };
};

export const deleteProductById = async (product_id) => {
	const { data, error } = await supabase.from("c_products").delete().eq("id", product_id);
	return { data, error };
};
