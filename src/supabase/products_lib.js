import { supabase } from "../supabase/supabaseClient";

export const getProducts = async () => {
	const { data, error } = await supabase.from("c_products").select("*").order("name");
	return { data, error };
};
