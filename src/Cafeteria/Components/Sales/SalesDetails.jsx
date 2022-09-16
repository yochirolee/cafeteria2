import { React } from "react";
import { checkIfToday } from "../../Helpers/fnsDate";
import { format, isToday, parseISO } from "date-fns";

export const SalesDetails = ({ sales, isLoadingSales }) => {
	console.log(checkIfToday(sales[0]?.sale_at), "chequing");



	return (
		<div className="flex-col md:w-1/2 ">
			<h1 className="font-bold mt-4"> Detalles de Ventas</h1>
			<div className="max-h-72  overflow-y-auto">
				<div className="p-2 h-64 ">
					<div className="grid grid-cols-5 gap-2 text-center text-xs border-b border-dotted p-2  ">
						<p>Nombre</p>
						<p>Cantidad</p>
						<p>Precio</p>
						<p>Total</p>
					</div>
					{sales?.map((sale) => (
						<div key={sale.id} className="grid grid-cols-5 text-center text-xs ">
							<small>{sale.product_name} </small>
							<small> {sale.quantity_sold}</small>
							<small> {format(parseISO(sale.sale_at), "dd.MM.yyyy")}</small>
							<small> ${sale.price_sell}</small>
							<small> ${sale.price_sell * sale.quantity_sold} </small>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
