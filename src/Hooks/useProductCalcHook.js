import { useEffect, useMemo, useState } from "react";
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

	return {
		totalSalesByDay,
	};
};
