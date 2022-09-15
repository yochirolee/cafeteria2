import { React } from "react";
import { useSelector } from "react-redux";
import { DatePicker } from "../Components/DatePicker/DatePicker";
import { CafeteriaLayout } from "../Layout/CafeteriaLayout";
export const DashboardPage = () => {
	const { products, isLoading } = useSelector((state) => state.productsSlice);
	return (
		<>
			<CafeteriaLayout>
				<div className="flex  flex-col place-items-center">
					<p className="justify-left pb-4">Dashboard under construccion</p>

					<ul className="w-full  p-1 m-1  divide-y divide-gray-200 dark:divide-gray-700">
						{products.map((product) => (
							<li className="py-3 border my-2 px-2 " key={product.id}>
								<div className="flex  space-x-4">
									<div className="flex-1 min-w-0">
										<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
											{product.name}
										</p>
									</div>
									<div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
										${product.price_sell}
									</div>
									<button
										type="button"
										className="text-white text-xs bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  p-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Entrada
									</button>
									<button
										type="button"
										className="text-white text-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  p-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Vender
									</button>
								</div>
								<div className="flex  flex-row w-full justify-between">
									<div className="flex text-gray-500  items-center border-t border-dotted  text-xs justify-center space-x-4  p-1 mt-2 ">
										<span>Inicio: {product.quantity}</span>
										<span>Entrada: {product.quantity}</span>
										<span>A venta: {product.quantity}</span>
										<span>Vendidos: {product.quantity_sold}</span>
										<span>Final: {product.quantity_sold}</span>
									</div>
									<div className="flex flex-row  place-items-end ">
										<p className="text-sm border p-1 mt-1 rounded-lg">
											Venta Total: ${product.quantity_sold * product.price_sell}
										</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</CafeteriaLayout>
		</>
	);
};
