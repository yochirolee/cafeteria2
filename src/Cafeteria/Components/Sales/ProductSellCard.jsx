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
						<div className="flex items-center space-x-2">
							<h4 className="font-bold   text-left text-xs text-gray-600">{product.name}</h4>{" "}
							<div>
								<small className="rounded-xl px-1 mr-4 text-xs bg-blue-600 text-white">
									$ {product.price_sell}
								</small>
							</div>
						</div>
						<div className="flex shrink-0 items-center ">
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
									parseFloat(totalSalesByProduct) -
									parseFloat(product.entry)}
							</small>
						</div>
						<div className="flex flex-col text-center">
							<small>Entrada</small>
							<small>{product.entry}</small>
						</div>
						<div className="flex flex-col text-center">
							<small>a Venta</small>
							<small>{parseFloat(product.quantity) + parseFloat(totalSalesByProduct)}</small>
						</div>
						<div className="flex flex-col text-center">
							<small>Vendido</small>
							<small>{totalSalesByProduct}</small>
						</div>
						<div className="flex flex-col text-center">
							<small>Final</small>
							<small
								className={`text-white rounded-full font-bold ${
									product.quantity === 0
										? "bg-red-600 animate-pulse"
										: product.quantity < 10
										? " bg-yellow-500"
										: "bg-green-600 "
								}`}
							>
								{product.quantity}
							</small>
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
					className={`fas fas fa-cart-shopping   mx-2 cursor-pointer  ${
						parseInt(product.quantity) <= 0
							? "text-red-400/60 hover:text-red-400/60"
							: "text-blue-600 hover:text-blue-500"
					}`}
				></button>
			</div>
		</div>
	);
};
