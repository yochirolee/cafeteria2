import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useProductCalcHook = (product = {}) => {
	const { sales } = useSelector((state) => state.salesSlice);

	const totalSalesByDay = useMemo(() => {
		let sales_init = 0;
		sales.map((sale) => {
			sales_init += parseFloat(sale.quantity_sold) * parseFloat(sale.price_sell);
		});
		return sales_init;
	}, [sales.length]);

	const totalSalesByProduct = useMemo(() => {
		let sales_init = 0;
		let salesByProduct = [];
		//console.log(product.id, product.name);

		salesByProduct = sales.filter((sale) => sale.product_id === product.id);
		if (salesByProduct.length !== 0)
			salesByProduct.map((sale) => {
				sales_init += sale.quantity_sold;
			});
		else sales_init = 0;

		return sales_init;
	}, [sales.length]);

	return {
		totalSalesByDay,
		totalSalesByProduct,
	};
};
