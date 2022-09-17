import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, isToday, parseISO } from "date-fns";
import { SkeletonListProducts } from "../Components/Skeleton";
import { CafeteriaLayout } from "../Layout/CafeteriaLayout";
import { db_getSalesByDay } from "../../supabase/products_lib";
import { SalesDetails } from "../Components/Sales/SalesDetails";
import { getSalesThunks } from "../../Store/Cafeteria/Slices";
import { Spinner } from "../Components/Spinner";
import { useProductCalcHook } from "../../Hooks/useProductCalcHook";



export const DashboardPage = () => {
	const { sales, isLoadingSales } = useSelector((state) => state.salesSlice);
	const {totalSales}=useProductCalcHook()
	const dispatch = useDispatch();
	const [selectedDate, setSelectedDate] = useState(new Date());
	
	
	const handleDateSelect = () => {};

	const onChange = async (date) => {
		setSelectedDate(date);
	};

	useEffect(() => {
		dispatch(getSalesThunks(selectedDate));
	}, [selectedDate]);

	return (
		<>
			<CafeteriaLayout>
				<div className="flex mx-auto justify-center  h-20 ">
					<div className="flex relative items-center pl-3 ">
						<DatePicker
							className="bg-gray-50  border border-gray-300 text-gray-600 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							onSelect={handleDateSelect}
							onChange={(date) => onChange(date)}
							value={selectedDate}
							selected={selectedDate}
						/>
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-gray-500 dark:text-gray-400  absolute right-3"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
				</div>
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
				<div className="my-3 ">
					{isLoadingSales ? <SkeletonListProducts /> : <SalesDetails sales={sales} />}
				</div>
			</CafeteriaLayout>
		</>
	);
};
