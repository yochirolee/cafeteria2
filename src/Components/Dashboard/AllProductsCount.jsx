import { React } from "react";
import { useDispatch } from "react-redux";
import { setShowNewProductModal } from "../../Store/Slices/uiSlice";
import { ProductListCard } from "../Products/ProductListCard";
import { SearchProductForm } from "../Products/SearchProductForm";
export const AllProductsCount = () => {
	const dispatch = useDispatch();

	return (
		<div className="container mx-auto  p-4">
			<h1 className="font-bold my-2"> AllProductsCount</h1>
			<div className="flex gap-2 ">
				<div className="flex flex-col w-1/2 items-left bg-blue-500 text-white p-4 rounded-lg  border flex-shrink-0">
					<i class="fas fa-chart-pie text-3xl my-2"></i>
					<div className="flex flex-col gap-1 ">
						<span>123</span>
						<small className="text-xs">Productos en Existencia</small>
					</div>
				</div>
				<div className="flex flex-col w-1/2 items-left bg-sky-500/80 text-white p-4 rounded-lg  border flex-shrink-0">
					<i class="fas fa-chart-pie text-3xl my-2"></i>
					<div className="flex flex-col gap-1 ">
						<span>123</span>
						<small className="text-xs">Productos en Existencia</small>
					</div>
				</div>
			</div>

			<div className="flex-col md:w-1/2">
				<h1 className="font-bold mt-4"> Productos</h1>
				<div className="flex py-2 my-4 justify-center gap-2">
					<SearchProductForm />

					<button
						onClick={() => dispatch(setShowNewProductModal())}
						className=" border border-blue-500  text-blue-600 px-3.5 rounded-lg  justify-end"
					>
						<i className="fas fa-add"></i>
					</button>
				</div>
				<ProductListCard />
			</div>
		</div>
	);
};
