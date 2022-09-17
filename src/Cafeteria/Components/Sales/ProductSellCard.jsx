import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useProductCalcHook } from "../../../Hooks";
import { setSelectedProduct, setShowEntryModal } from "../../../Store/Cafeteria/Slices";
import { setShowSaleModal } from "../../../Store/Cafeteria/Slices";

export const ProductSellCard = ({ product }) => {
	const dispatch = useDispatch();

	const { totalSalesByProduct } = useProductCalcHook(product);

	const onProductSale = () => {
		dispatch(setSelectedProduct(product));
		dispatch(setShowSaleModal());
	};

	const onProductEntry = () => {
		dispatch(setSelectedProduct(product));
		dispatch(setShowEntryModal());
	};

	return (
		<div className="flex items-center justify-between  p-2 border rounded-lg my-2 hover:bg-gray-100">
			<div className="flex  py-2  w-full ">
				<div className="flex flex-col w-full ">
					<div className=" flex items-center  justify-between pl-4 ">
						<div className="flex space-x-2">
							<h4 className="font-bold   text-left text-xs text-gray-600">{product.name}</h4>{" "}
						</div>
						<div className="flex shrink-0 ">
							<div>
								<small className="rounded-xl px-1 mr-4 text-xs bg-blue-700 text-white">
									$ {product.price_sell}
								</small>
							</div>
							<div>
								<i className="fas fa-box   p-1.5 text-gray-600"></i>
								<small className="font-bold text-gray-600 pr-4">{product.quantity}</small>
							</div>
							<div>
								<i className="fas fa-sack-dollar   p-1.5 text-green-500"></i>
								<small className="font-bold text-green-500 pr-4">
									{totalSalesByProduct * product.price_sell}
								</small>
							</div>
						</div>
					</div>
					<div className="flex border-t text-slate-600 p-1 px-4 border-dotted  text-xs justify-between gap-2 text">
						<div className="flex flex-col text-center">
							<small>Inicio</small>
							<small>
								{parseFloat(product.quantity) +
									parseFloat(product.quantity_sold) -
									parseFloat(product.entry)}
							</small>
						</div>
						<div className="flex flex-col text-center">
							<small>Entrada</small>
							<small>{product.entry}</small>
						</div>
						<div className="flex flex-col text-center">
							<small>a Venta</small>
							<small>{parseFloat(product.quantity) + parseFloat(product.quantity_sold)}</small>
						</div>
						<div className="flex flex-col text-center">
							<small>Vendido</small>
							<small>{totalSalesByProduct}</small>
						</div>
					</div>
				</div>
			</div>
			<div className="flex   w-1/5 justify-center">
				<i
					onClick={() => onProductEntry()}
					className="fas fa-plus text-blue-600  mx-2 cursor-pointer hover:animate-pulse hover:text-red-500"
				></i>
				<button
					disabled={parseInt(product.quantity) <= 0}
					onClick={() => onProductSale()}
					className="fas fas fa-cart-shopping  text-blue-600 mx-2 cursor-pointer hover:text-gray-600 "
				></button>
			</div>
		</div>
	);
};
