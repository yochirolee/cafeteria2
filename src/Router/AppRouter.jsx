import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../Auth/Routes/AuthRoutes";
import { CafeteriaRoutes } from "../Cafeteria/Routes/CafeteriaRoutes";

export const AppRouter = () => {
	const  status  = "authenticated";

	return (
		<Routes>
			{status === "authenticated" ? (
				<Route path="/*" element={<CafeteriaRoutes />} />
			) : (
				<Route path="/auth/*" element={<AuthRoutes />} />
			)}

			<Route path="/*" element={<Navigate to="/auth/login" />} />

			{/*Login and Register */}
			{/*<Route path="/auth/*" element={<AuthRoutes />}></Route>
			{/*Journal App */}
			{/*<Route path="/*" element={<JournalRoutes />}></Route>
			 */}
		</Routes>
	);
};
