import { React, useEffect, useState } from "react";
import { AppRouter } from "./Router/AppRouter";
import { db_getCurrentDay } from "./supabase/products_lib";

export const CafeteriaApp = () => {
	const [currentDay, setCurrentDay] = useState("");

	const getCurrentDat = async () => {
		const { currentDay } = await db_getCurrentDay();
		
	};
	useEffect(() => {
		const result = getCurrentDat();
		setCurrentDay(result);
	}, []);

	return <AppRouter />;
};
