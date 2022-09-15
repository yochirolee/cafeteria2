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
							<i className="fas fa-sack-dollar   p-1.5 text-green-500"></i>
							<small className="font-bold text-green-500 pr-4">
								{product.quantity * product.price_sell}
							</small>
						</div>
					</div>
					<div className="flex border-t text-slate-600 p-1 px-4 border-dotted  text-xs justify-between gap-2 text">
						<small>Inicio: {product.price_buy}</small>
						<small>Entrada: {product.price_sell}</small>
						<small>a Venta: {product.price_sell - product.price_buy} cup</small>
						<small>Vendido: {product.price_sell - product.price_buy} cup</small>
					</div>
				</div>
			</div>
			<div className="flex   w-1/5 justify-center">
				<i
					onClick={() => onProductDelete()}
					className="fas fa-plus text-blue-600  mx-2 cursor-pointer hover:animate-pulse hover:text-red-500"
				></i>
				<i
					onClick={() => onProductUpdate()}
					className="fas fas fa-cart-shopping  text-blue-600 mx-2 cursor-pointer hover:text-gray-600 "
				></i>
			</div>
		</div>
	);
};
