import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useProductCalcHook = () => {
	const { selectedProduct,products } = useSelector((state) => state.productsSlice);
	const [productStock, setProductStock] = useState(0);
	const [totalSales,setTotalSales]=useState(0);

	const calculateProductStock = () => {
		setProductStock(
			parseFloat(selectedProduct?.entry) +
				parseFloat(selectedProduct?.quantity) -
				parseFloat(selectedProduct?.quantity_sold),
		);
	};

	const calculateTotalSales = () => {
		let sales = 0;
		products.map((prod) => {
			sales += parseFloat(prod.quantity_sold) * parseFloat(prod.price_sell);
		});
		setTotalSales(sales)
	};

	useEffect(() => {
		calculateProductStock();
		calculateTotalSales();
		console.log("hooks");
	}, [selectedProduct]);

	return {
		productStock,totalSales
	};
};
