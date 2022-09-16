import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSalesThunks } from "../../../Store/Cafeteria/Slices";

export const SalesDetails = () => {
	const { sales, isLoadingSales } = useSelector((state) => state.salesSlice);

	const dispatch = useDispatch();

	console.log(sales, "sales on sales detrails");

	useEffect(() => {
		dispatch(getSalesThunks());
	}, []);

	if (isLoadingSales) {
		return <h1>loading</h1>;
	}

	return (
		<div className="p-2 h-64">
			<div className="grid grid-cols-4 ">
				<p>Nombre</p>
				<p>Cantidad</p>
				<p>Precio</p>
				<p>Total</p>
			</div>
			{sales?.map((sale) => (
				<div className="grid grid-cols-4 ">
					<small>{sale.product_name} </small>
					<small> {sale.quantity_sold}</small>
					<small> ${sale.price_sell}</small>
					<small> ${sale.price_sell * sale.quantity_sold} </small>
				</div>
			))}
		</div>
	);
};
