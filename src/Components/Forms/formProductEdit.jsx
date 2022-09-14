import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export const FormProductEdit = () => {
	const { selectedProduct } = useSelector((state) => state.productsSlice);

    console.log(selectedProduct);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<div className="relative p-4 w-full max-w-md h-full md:h-auto">
			<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
				<button
					onClick={() => dispatch(setShowNewProductModal())}
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
				<div className="py-6 px-6 lg:px-8">
					<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
						Editar Producto
					</h3>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#">
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Nombre del Producto
							</label>
							<input
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								type="text"
								placeholder="Nombre"
								{...register("Nombre", { required: true, maxLength: 80 })}
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Precio de Compra
							</label>

							<input
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								type="number"
								placeholder="Precio de Compra"
								{...register("Precio de Compra", { required: true, maxLength: 100 })}
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Precio de Venta
							</label>
							<input
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								type="number"
								placeholder="Precio de Venta"
								{...register("Precio de Venta", { required: true })}
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Cantidad
							</label>
							<input
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								type="number"
								placeholder="Cantidad"
								{...register("Cantidad", { required: true, maxLength: 12 })}
							/>
						</div>
						<button
							type="submit"
							className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Editar Producto
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
