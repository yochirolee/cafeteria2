import { React } from "react";
import { useDispatch } from "react-redux";
import { setToggleUserMenu } from "../../Store/Slices/ui";

export const Avatar = () => {
	const dispatch = useDispatch();
	return (
		<button
			type="button"
			className="flex  mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
			id="user-menu-button"
			aria-expanded="false"
			data-dropdown-toggle="user-dropdown"
			data-dropdown-placement="bottom"
			onClick={() => dispatch(setToggleUserMenu())}
		>
			<span className="sr-only">Open user menu</span>
			<img className="w-8 h-8 rounded-full" src="/profile-picture-3.jpg" alt="user photo" />
		</button>
	);
};
