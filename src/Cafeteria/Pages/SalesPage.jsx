import { React, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunks } from "../../Store/Cafeteria/Slices";
import { setShowInsertModal } from "../../Store/Cafeteria/Slices";
import { SearchProductForm } from "../Components/Products";
import { SkeletonListProducts } from "../Components/Skeleton";
import { useForm } from "../../Hooks";
import { CafeteriaLayout } from "../Layout/CafeteriaLayout";
import { ProductSellCard } from "../Components/Products/ProductSellCard";
import { SaleProductModal } from "../Components/Modals/SaleProductModal";
import { SalesDetails } from "../Components/Sales/SalesDetails";

const getProductsByName = (products, search) => {
	if (search.length > 2)
		return products.filter((product) => product.name.toLocaleLowerCase().includes(search));
	return null;
};
const calculateTotalProductos = (products) => {
	let totalProductos = 0;
	products.map((prod) => {
		totalProductos += parseFloat(prod.quantity);
	});
	return totalProductos;
};
const calculateTotalSales = (products) => {
	let totalSales = 0;
	products.map((prod) => {
		totalSales += parseFloat(prod.quantity_sold) * parseFloat(prod.price_sell);
	});
	return totalSales;
};

export const SalesPage = () => {
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
		<CafeteriaLayout>
			<h1 className="font-bold my-2">Ventas</h1>
			<div className="flex gap-2 ">
				<div className="flex flex-col w-1/3 items-center bg-green-400 text-white p-4 rounded-lg  border flex-shrink-0">
					<i className="fas fa-dollar-sign text-3xl my-2">
						<span className="font-bold ml-2">{calculateTotalSales(products)}</span>
					</i>
					<div className="flex flex-col gap-1 ">
						<small className="text-xs">Venta del Dia</small>
					</div>
				</div>
				<div className="flex flex-col w-1/3 items-center bg-green-400 text-white p-4 rounded-lg  border flex-shrink-0">
					<i className="fas fa-dollar-sign text-3xl my-2">
						<span className="font-bold ml-2">{calculateTotalSales(products)}</span>
					</i>
					<div className="flex flex-col gap-1 ">
						<small className="text-xs">Venta del Dia</small>
					</div>
				</div>
			</div>
			<h1 className="font-bold mt-4"> Productos</h1>
			<div className="flex flex-col md:flex-row">
				<div className="flex-col md:w-1/2">
					<div className="flex py-2 my-4 justify-center gap-2">
						<SearchProductForm
							search={search}
							onInputChange={onInputChange}
							onResetForm={onResetForm}
						/>
					</div>
					{isLoading ? (
						<SkeletonListProducts />
					) : (
						<div className="max-h-72  overflow-y-auto">
							{searchProductsResult
								? searchProductsResult.map((product) => (
										<ProductSellCard key={product.id} product={product} />
								  ))
								: products.map((product) => <ProductSellCard key={product.id} product={product} />)}
						</div>
					)}
				</div>
				<div className="flex-col md:w-1/2 mt-4">
					<h1 className="font-bold mt-4"> Detalles de Ventas</h1>
					<div className="max-h-72  overflow-y-auto">
						<SalesDetails />
					</div>
				</div>
			</div>

			<SaleProductModal />
		</CafeteriaLayout>
	);
};
