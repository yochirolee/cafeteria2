import { Route, Routes, Navigate } from "react-router-dom";
import { DashboardPage } from "../Pages/DashboardPage";
import { ProductPage } from "../Pages/ProductPage";

export const CafeteriaRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<DashboardPage />} />
			<Route path="/products" element={<ProductPage />} />
			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	);
};
