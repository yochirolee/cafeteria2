import { React } from "react";
import { useDispatch } from "react-redux";
import { setShowNewProductModal } from "../../Store/Slices/ui";
import { AddProductModal } from "../Modals/AddProductModal";
export const ProductListCard = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<div className="flex items-center justify-between  p-2 border rounded-lg my-2 hover:bg-gray-100">
			<div className="flex  py-2  w-full items-center">
				<div className="flex flex-col w-full ">
					<div className=" flex items-center justify-between pl-4 ">
						<h4 className="font-bold   text-center text-sm text-gray-600">{product.name}</h4>
						<div>
							<i className="fas fa-box   p-1.5 text-gray-600"></i>
							<small className="font-bold text-gray-600 pr-4">{product.quantity}</small>
							<i className="fas fa-sack-dollar   p-1.5 text-green-600"></i>
							<small className="font-bold text-green-600 pr-4">
								{product.quantity * product.price_sell}
							</small>
						</div>
					</div>
					<div className="flex  p-2 text-xs justify-around gap-2 text">
						<div className="text-red-600 flex items-center  gap-2">
							<i className="fas  fa-chevron-down "></i>
							<small>Compra: {product.price_buy}</small>
						</div>
						<div className="text-green-600 flex items-center  gap-2">
							<i className="fas  fa-chevron-up "></i>
							<small>Venta: {product.price_sell}</small>
						</div>

						<div className="text-blue-600 flex items-center  gap-2">
							<i className="fas  fa-dollar-sign "></i>

							<small>Ganancia:{product.price_sell - product.price_buy} cup</small>
						</div>
					</div>
				</div>
			</div>
			<i
				onClick={() => dispatch(setShowNewProductModal())}
				className="fas fa-chevron-right text-gray-600 mx-2"
			></i>
			<AddProductModal />
		</div>
	);
};
