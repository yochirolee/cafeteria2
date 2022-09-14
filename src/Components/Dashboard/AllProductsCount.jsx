import { React, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunks } from "../../Store/Slices/products/thunks";
import { setShowUpdateProductModal } from "../../Store/Slices/ui";
import { ProductListCard } from "../Products/ProductListCard";
import { SearchProductForm } from "../Products/SearchProductForm";
import { SkeletonListProducts } from "../Skeleton/SkeletonListPoducts";
import { EditProductModal, DeleteModal } from "../Modals";
import { useForm } from "../../Hooks/useForm";

const getProductsByName = (products, search) => {
	if (search.length > 3)
		return products.filter((product) => product.name.toLocaleLowerCase().includes(search));
	return null;
};

export const AllProductsCount = () => {
	const { products, isLoading } = useSelector((state) => state.productsSlice);
	const { search, onInputChange, onResetForm } = useForm({ search: "" });
	const searchProductsResult = useMemo(
		() => getProductsByName(products, search),
		[search, products.length],
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsThunks());
	}, []);

	return (
		<div className="container mx-auto  p-4">
			<h1 className="font-bold my-2">Estado de Productos</h1>
			<div className="flex gap-2 ">
				<div className="flex flex-col w-1/2 items-left bg-blue-500 text-white p-4 rounded-lg  border flex-shrink-0">
					<i className="fas fa-chart-pie text-3xl my-2"></i>
					<div className="flex flex-col gap-1 ">
						<span className="font-bold">{products?.length}</span>
						<small className="text-xs">Productos en Existencia</small>
					</div>
				</div>
				<div className="flex flex-col w-1/2 items-left bg-sky-500/80 text-white p-4 rounded-lg  border flex-shrink-0">
					<i className="fas fa-chart-pie text-3xl my-2"></i>
					<div className="flex flex-col gap-1 ">
						<span>123</span>
						<small className="text-xs">Productos en Existencia</small>
					</div>
				</div>
			</div>

			<div className="flex-col md:w-1/2">
				<h1 className="font-bold mt-4"> Productos</h1>
				<div className="flex py-2 my-4 justify-center gap-2">
					<SearchProductForm
						search={search}
						onInputChange={onInputChange}
						onResetForm={onResetForm}
					/>

					<button
						onClick={() => dispatch(setShowUpdateProductModal())}
						className=" border border-blue-500  text-blue-600 px-3.5 rounded-lg  justify-end"
					>
						<i className="fas fa-add"></i>
					</button>
				</div>
				{isLoading ? (
					<SkeletonListProducts />
				) : (
					<div className="max-h-72  overflow-y-auto">
						{searchProductsResult
							? searchProductsResult.map((product) => (
									<ProductListCard key={product.id} product={product} />
							  ))
							: products.map((product) => <ProductListCard key={product.id} product={product} />)}
					</div>
				)}
			</div>
			<EditProductModal />
			<DeleteModal />
		</div>
	);
};
