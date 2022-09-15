import { React } from "react";
import { NavbarApp } from "../Components/Navbar/Navbar";
export const CafeteriaLayout = ({ children }) => {
	return (
		<>
			<NavbarApp />
			{children}
		</>
	);
};
