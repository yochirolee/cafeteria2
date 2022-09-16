import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, isToday, parseISO } from "date-fns";
import { SkeletonListProducts } from "../Components/Skeleton";
import { CafeteriaLayout } from "../Layout/CafeteriaLayout";
import { db_getSalesByDay } from "../../supabase/products_lib";
import { SalesDetails } from "../Components/Sales/SalesDetails";

export const DashboardPage = () => {
	const { products, isLoading } = useSelector((state) => state.productsSlice);
	const [sales, setSales] = useState([]);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const handleDateSelect = () => {};

	const onChange = async (date) => {
		setSelectedDate(date);
		console.log(sales, "sales by day");
	};

	const getSalesByDay = async () => {
		const {data} = await db_getSalesByDay(selectedDate);
		setSales(data);
	};

	useEffect(() => {
		getSalesByDay();
	}, [selectedDate]);

	if (isLoading) return <SkeletonListProducts />;

	return (
		<>
			<CafeteriaLayout>
				<DatePicker onSelect={handleDateSelect} onChange={(date) => onChange(date)} />
				<SalesDetails sales={sales} /> 
			</CafeteriaLayout>
		</>
	);
};
