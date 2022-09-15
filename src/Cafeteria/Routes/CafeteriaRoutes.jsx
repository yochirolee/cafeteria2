import { Route, Routes, Navigate } from "react-router-dom";
import { DashboardPage } from "../Pages/DashboardPage";
import { ProductPage } from "../Pages/ProductPage";
import { SalesPage } from "../Pages/SalesPage";

export const CafeteriaRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<DashboardPage />} />
			<Route path="/sales" element={<SalesPage />} />
			<Route path="/products" element={<ProductPage />} />
			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	);
};
