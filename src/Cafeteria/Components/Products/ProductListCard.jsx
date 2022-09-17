import { React } from "react";
import { useDispatch } from "react-redux";
import { useProductCalcHook } from "../../../Hooks";
import { setSelectedProduct } from "../../../Store/Cafeteria/Slices";
import { setShowDeleteModal,setShowEntryModal, setShowUpdateProductModal } from "../../../Store/Cafeteria/Slices";

export const ProductListCard = ({ product }) => {
	const dispatch = useDispatch();

	const { totalSalesByProduct } = useProductCalcHook(product);

	const onProductUpdate = () => {
		dispatch(setSelectedProduct(product));
		dispatch(setShowUpdateProductModal());
	};
	const onProductDelete = () => {
		dispatch(setSelectedProduct(product));
		dispatch(setShowDeleteModal());
	};
	const onProductEntry = () => {
		dispatch(setSelectedProduct(product));
		dispatch(setShowEntryModal());
	};

	return (
		<div className="flex flex-col border px-2 rounded-lg my-2 hover:bg-gray-100  py-2 pb-2  w-full ">
			<div className=" flex pb-2 items-center justify-between  ">
				<div className="inline-flex space-x-2 items-center">
					<h4 className="font-bold   text-center text-sm text-gray-600">{product.name}</h4>
					<small className="rounded-xl px-1 mr-4 text-xs bg-blue-600 text-white">
						$ {product.price_sell}
					</small>
				</div>
				<div>
					<i
						onClick={() => onProductEntry()}
						className="fas fa-plus text-blue-600 mx-2 cursor-pointer hover:text-gray-600 "
					></i>
					<i
						onClick={() => onProductUpdate()}
						className="fas fa-edit text-green-600 mx-2 cursor-pointer hover:text-gray-600 "
					></i>
					<i
						onClick={() => onProductDelete()}
						className="fas fa-trash-can text-red-400 mx-2 cursor-pointer hover:animate-pulse hover:text-red-500"
					></i>
				</div>
			</div>
			<div className="flex border-t text-slate-600 p-1 px-4 border-dashed  text-xs justify-between gap-2 text">
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
						className={`text-white px-1 rounded-full font-bold ${
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
			<div className="flex  pt-2 border-t border-dashed text-slate-600  text-xs justify-around gap-2 text">
				<div className="flex items-center  gap-2">
					<i className="fas  fa-chevron-down "></i>
					<small>Compra: {product.price_buy}</small>
				</div>
				<div className=" flex items-center  gap-2">
					<i className="fas  fa-chevron-up "></i>
					<small>Venta: {product.price_sell}</small>
				</div>

				<div className=" flex items-center  gap-2">
					<i className="fas  fa-dollar-sign "></i>

					<small>Ganancia x unidad: {product.price_sell - product.price_buy}</small>
				</div>
			</div>
		</div>
	);
};
