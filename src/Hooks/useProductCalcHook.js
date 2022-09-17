import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export const useProductCalcHook = () => {
	const { selectedProduct, products } = useSelector((state) => state.productsSlice);
	const { sales } = useSelector((state) => state.salesSlice);

	const [productStock, setProductStock] = useState(0);
	const [totalSales, setTotalSales] = useState(0);

	const calculateProductStock = () => {
		setProductStock(
			parseFloat(selectedProduct?.entry) +
				parseFloat(selectedProduct?.quantity) -
				parseFloat(selectedProduct?.quantity_sold),
		);
	};

	const calculateTotalSales = () => {
		let sales_init = 0;
		products.map((prod) => {
			sales_init += parseFloat(prod.quantity_sold) * parseFloat(prod.price_sell);
		});
		setTotalSales(sales_init);
	};

	const totalSalesByDay = useMemo(() => {
		let sales_init = 0;
		sales.map((sale) => {
			sales_init += parseFloat(sale.quantity_sold) * parseFloat(sale.price_sell);
		});
		return sales_init;
	}, [sales.length]);

	useEffect(() => {
		calculateProductStock();
		calculateTotalSales();

		console.log("hooks");
	}, [selectedProduct]);

	return {
		productStock,
		totalSales,
		totalSalesByDay,
	};
};
