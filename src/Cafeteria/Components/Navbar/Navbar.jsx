import { React } from "react";
import { Avatar } from "./Avatar";
import { AvatarNav } from "./AvatarNav";
import { MenuToggle } from "./MenuToggle";
import { NavBarLogo } from "./NavBarLogo";
import { NavBarMenu } from "./NavBarMenu";

export const NavbarApp = () => {
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<NavBarLogo />
				<div className="flex relative items-center md:order-2">
					<Avatar />
					<AvatarNav />
					<MenuToggle />
				</div>
				<NavBarMenu />
			</div>
		</nav>
	);
};
