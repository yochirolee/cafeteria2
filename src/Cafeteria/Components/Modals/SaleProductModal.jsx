import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	productsSlice,
	saleProductThunks,
	setShowSaleModal,
} from "../../../Store/Cafeteria/Slices";
import { useForm } from "react-hook-form";
import { updateProductThunks } from "../../../Store/Cafeteria/Slices";

export const SaleProductModal = () => {
	const { showSaleModal } = useSelector((state) => state.uiSlice);
	const { selectedProduct } = useSelector((state) => state.productsSlice);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		reset(selectedProduct);
	}, [selectedProduct?.id]);

	const onSubmit = (data) => {
		dispatch(saleProductThunks(data));
		dispatch(setShowSaleModal());
	};

	return (
		<div
			id="authentication-modal"
			tabIndex="-1"
			aria-hidden="true"
			className={`overflow-y-auto bg-gray-500/60  overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center ${
				showSaleModal ? " " : "hidden"
			}`}
		>
			<div className="relative p-4 w-full max-w-md h-full md:h-auto">
				<div className="relative p-4 w-full max-w-md h-full md:h-auto">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<button
							onClick={() => dispatch(setShowSaleModal())}
							type="button"
							className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
							data-modal-toggle="authentication-modal"
						>
							<svg
								aria-hidden="true"
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
						<div className="py-6 px-6 text-center lg:px-8">
							<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
								Vender Producto
							</h3>
							<div className="flex gap-2 justify-center ">
								<div className="flex flex-col w-1/2 text-center  bg-blue-500 text-white p-4 rounded-lg  border flex-shrink-0">
									<i className="fas fa-box text-3xl m-2">
										<span className="font-bold m-4">{parseFloat(selectedProduct?.entry) + parseFloat(selectedProduct?.quantity)-parseFloat(selectedProduct?.quantity_sold)}</span>
									</i>
									<div className="flex text-center flex-col gap-1 ">
										<small className="text-xs">Cantidad en Inventario</small>
									</div>
								</div>
							</div>
							<form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#">
								<div className="pt-4 text-center">
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Introduzca Cantidad a Vender
									</label>

									<input
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
										type="number"
										placeholder="Cantidad"
										defaultValue="1"
										{...register("quantity_for_sell", { min: 1, required: true })}
									/>
									{errors.quantity_for_sell && (
										<span className="text-red-400  text-xs pl-2">Este campo es requerido</span>
									)}
								</div>

								<button
									type="submit"
									className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Vender Producto
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
