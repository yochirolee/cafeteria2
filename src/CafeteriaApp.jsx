import { React } from "react";
import { store} from './Store/store'
import { Provider } from "react-redux";
import { NavbarApp } from "./Components/Navbar/Navbar";
import { AllProductsCount } from "./Components/Dashboard/AllProductsCount";

export const CafeteriaApp = () => {
	return (
		<Provider store={store}>
			<NavbarApp />
			<AllProductsCount/>
		</Provider>
	);
};
