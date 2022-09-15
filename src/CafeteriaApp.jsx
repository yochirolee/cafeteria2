import { React } from "react";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { NavbarApp } from "./Cafeteria/Components/Navbar/Navbar";
import { ProductPage } from "./Cafeteria/Pages/ProductPage";

export const CafeteriaApp = () => {
	return (
		<Provider store={store}>
			<NavbarApp />
			<ProductPage />
		</Provider>
	);
};
