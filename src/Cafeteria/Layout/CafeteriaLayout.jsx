import { React } from "react";
import { NavbarApp } from "../Components/Navbar/Navbar";
export const CafeteriaLayout = ({ children }) => {
	return (
		<>
			<NavbarApp />
			<div className="container mx-auto  p-4">{children}</div>
		</>
	);
};
