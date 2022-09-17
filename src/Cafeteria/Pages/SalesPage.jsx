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
										//<ProductSellCard key={product.id} product={product} />

										<div className="flex flex-col lg:w-1/3  bg-white rounded-lg mx-2 text-center my-2 ">
											<div>
												<div className="flex flex-row items-center border-b justify-around ">
													<h2 className="basis-2/4 text-sm items-center font-bold p-2 text-gray-500 ">
														{product.name}
													</h2>

													<div className="w-full flex justify-end mr-2 ">
														<div className="border-r mr-2">
															<i className="las la-balance-scale h-6 w-6  text-sm rounded-full text-center pt-0.5 mr-2   border "></i>
															<i
																onClick={() => handleGetProductForSellAll(product)}
																className="las la-exchange-alt h-6 w-6   text-sm rounded-full text-center pt-0.5 mr-2   border "
															></i>
														</div>
														<i
															onClick={() => handleGetProductQuantityAdd(product)}
															className="fas fa-plus  h-6 w-6  text-sm rounded-full text-center pt-0.5 mr-2 border border-gray-300    text-gray-600 bg-gray-100 "
														></i>
														<i
															onClick={() => handleGetProductForUpdate(product)}
															className="fas fa-edit h-6 w-6  text-sm rounded-full text-center pt-0.5 mr-2   border border-green-300    text-green-600 bg-green-100"
														></i>

														<i
															onClick={() => {
																setDeleteId(product.id);
																handleConfirmationModalDelete();
															}}
															className="fas fa-trash-alt  h-6 w-6  text-sm rounded-full text-center pt-0.5   border border-red-300  text-red-600 bg-red-100"
														></i>
													</div>
												</div>
												<div className="flex flex-row justify-around items-center  mx-auto p-1  text-xs ">
													<div className="flex flex-col mx-1 ">
														<p className="mr-1 font-thin ">Inicio</p>
														<p> {product.quantity}</p>
													</div>
													<div className="flex flex-col  mx-1 ">
														<p className="mr-1 font-thin">Entrada</p>
														<p>{product.entry}</p>
													</div>
													<div className="flex flex-col   mx-1 ">
														<p className="mr-1 ">A Venta</p>
														<p> {product.quantity + product.entry}</p>
													</div>
													<div className="flex flex-col  items-center mx-1 ">
														<p className="mr-1 ">Vendidos</p>
														<p> {product.quantity_sold}</p>
													</div>
													<div className="flex flex-col  items-center mx-1 ">
														<p className="mr-1">Venta</p>
														<p> $ {product.price * product.quantity_sold}</p>
													</div>
													<div className="flex flex-col text-center ">
														<p className="mr-1 ">Final</p>
														<p
															className={`${
																product.quantity + product.quantity + product.entry == 0
																	? "bg-red-600 animate-pulse"
																	: product.quantity + product.entry < 10
																	? " bg-yellow-500"
																	: "bg-green-600 "
															} flex flex-row px-2   text-white rounded-full   mx-auto items-center lg:border-none `}
														>
															{product.quantity + product.entry - product.quantity_sold}
														</p>
													</div>
												</div>
											</div>
											<div
												className={`${
													product.cost == product.price ? "bg-red-400 text-white" : ""
												} text-xs font-thin flex flex-row container justify-center rounded-b-lg border-t`}
											>
												<div className="flex mx-2">
													<p>Compra:</p>
													<p className="mx-2">{product.cost} </p>
												</div>
												<div className="flex mx-2">
													<p>Venta:</p>
													<p className="mx-2">{product.price}</p>
												</div>
											</div>
										</div>
								  ))
								: products.map((product) => <ProductSellCard key={product.id} product={product} />)}
						</div>
					)}
				</div>
				{searchSalesResult ? (
					<SalesDetails
						sales={searchSalesResult}
						isLoadingSales={isLoadingSales}
						isASearch={true}
					/>
				) : (
					<SalesDetails sales={sales} isLoadingSales={isLoadingSales} />
				)}
			</div>
			<EntryProductModal />
			<SaleProductModal />
		</CafeteriaLayout>
	);
};
