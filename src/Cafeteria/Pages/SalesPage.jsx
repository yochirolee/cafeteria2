import { React, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductsThunks } from "../../Store/Cafeteria/Slices";
import { getSalesThunks } from "../../Store/Cafeteria/Slices";
import { SearchProductForm } from "../Components/Products";
import { SkeletonListProducts } from "../Components/Skeleton";
import { useForm } from "../../Hooks";
import { CafeteriaLayout } from "../Layout/CafeteriaLayout";
import { ProductSellCard } from "../Components/Sales/ProductSellCard";
import { SaleProductModal } from "../Components/Modals/SaleProductModal";
import { SalesDetails } from "../Components/Sales/SalesDetails";
import { Spinner } from "../Components/Spinner";
import { useProductCalcHook } from "../../Hooks/useProductCalcHook";
import { EntryProductModal } from "../Components/Modals/EntryProductModal";

const getProductsByName = (products, search) => {
	if (search.length > 2)
		return products.filter((product) => product.name.toLocaleLowerCase().includes(search));
	return null;
};
const getSalesByName = (sales, search) => {
	if (search.length > 2)
		return sales.filter((sales) => sales.product_name.toLocaleLowerCase().includes(search));
	return null;
};

// START COMPONENT

export const SalesPage = () => {
	const { products, isLoading } = useSelector((state) => state.productsSlice);
	const { sales, isLoadingSales } = useSelector((state) => state.salesSlice);
	const { totalSales } = useProductCalcHook();
	const { search, onInputChange, onResetForm } = useForm({ search: "" });

	const searchProductsResult = useMemo(
		() => getProductsByName(products, search),
		[search, products.length],
	);
	const searchSalesResult = useMemo(() => getSalesByName(sales, search), [search, sales.length]);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsThunks());
		dispatch(getSalesThunks());
	}, []);

	return (
		<CafeteriaLayout>
			<h1 className="font-bold my-2">Ventas</h1>
			<div className="flex gap-2 justify-center ">
				<div className="flex flex-col w-1/2 items-center bg-green-400 text-white p-4 rounded-lg  border ">
					{isLoadingSales ? (
						<Spinner color="fill-green-500" />
					) : (
						<>
							<i className="fas fa-dollar-sign text-3xl my-2">
								<span className="font-bold ml-2">{totalSales}</span>
							</i>
							<div className="flex flex-col gap-1 ">
								<small className="text-xs">Venta del Dia</small>
							</div>
						</>
					)}
				</div>
				<div className="flex flex-col w-1/2 items-center bg-violet-400 text-white p-4 rounded-lg  border flex-shrink-0">
					{isLoadingSales ? (
						<Spinner color="fill-violet-500" />
					) : (
						<>
							<i className="fas fa-arrow-up text-3xl my-2">
								<span className="font-bold ml-2">{sales?.length}</span>
							</i>
							<div className="flex flex-col gap-1 ">
								<small className="text-xs">Venta del Dia</small>
							</div>
						</>
					)}
				</div>
			</div>
			<h1 className="font-bold mt-4"> Productos</h1>
			<div className="flex flex-col space-x-4 md:flex-row">
				<div className="flex-col w-full lg:w-1/2  mx-auto">
					<div className="flex py-2 my-4  justify-center gap-2">
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
				{searchSalesResult ? (
					<SalesDetails sales={searchSalesResult} isLoadingSales={isLoadingSales} isASearch={true} />
				) : (
					<SalesDetails sales={sales} isLoadingSales={isLoadingSales} />
				)}
			</div>
			<EntryProductModal/>
			<SaleProductModal />
		</CafeteriaLayout>
	);
};
