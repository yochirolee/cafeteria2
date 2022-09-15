import { React } from "react";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../../Store/Cafeteria/Slices";
import { setShowDeleteModal, setShowUpdateProductModal } from "../../../Store/Cafeteria/Slices";

export const ProductSellCard = ({ product }) => {
	const dispatch = useDispatch();

	const onProductUpdate = () => {
		dispatch(setSelectedProduct(product));
		dispatch(setShowUpdateProductModal());
	};
	const onProductDelete = () => {
		dispatch(setSelectedProduct(product));
		dispatch(setShowDeleteModal());
	};

	return (
		<div className="flex items-center justify-between  p-2 border rounded-lg my-2 hover:bg-gray-100">
			<div className="flex  py-2  w-full items-center">
				<div className="flex flex-col w-full ">
					<div className=" flex items-center justify-between pl-4 ">
						<h4 className="font-bold   text-center text-sm text-gray-600">{product.name}</h4>
						<div>
							<i className="fas fa-box   p-1.5 text-gray-600"></i>
							<small className="font-bold text-gray-600 pr-4">{product.quantity}</small>
							<i className="fas fa-sack-dollar   p-1.5 text-gray-600"></i>
							<small className="font-bold text-gray-600 pr-4">
								{product.quantity * product.price_sell}
							</small>
						</div>
					</div>
					<div className="flex border-t border-dotted  p-2 text-xs justify-around gap-2 text">
						<div className="text-red-600 flex items-center  gap-2">
							<small>Inicio: {product.price_buy}</small>
						</div>
						<div className="text-green-600 flex items-center  gap-2">
							<small>Entrada: {product.price_sell}</small>
						</div>

						<div className="text-blue-600 flex items-center  gap-2">
							<small>a Venta:{product.price_sell - product.price_buy} cup</small>
						</div>

						<div className="text-blue-600 flex items-center  gap-2">
							<small>Vendido:{product.price_sell - product.price_buy} cup</small>
						</div>
					</div>
				</div>
			</div>
			<div className="flex border-l border-dotted w-1/5 justify-center">
				<i
					onClick={() => onProductDelete()}
					className="fas fa-plus text-gray-600  mx-2 cursor-pointer hover:animate-pulse hover:text-red-500"
				></i>
				<i
					onClick={() => onProductUpdate()}
					className="fas fas fa-sack-dollar text-green-600 mx-2 cursor-pointer hover:text-gray-600 "
				></i>
			</div>
		</div>
	);
};
