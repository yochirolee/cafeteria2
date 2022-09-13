import { React } from "react";
import { useSelector } from "react-redux";

export const AvatarNav = () => {
	const { toggleUserMenu } = useSelector((state) => state.uiSlice);
	return (
		<div
			className={`user-dropdown z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${
				toggleUserMenu ? " " : "hidden"
			} 
			id="user-dropdown"
		`}
		>
			<div className="py-3 px-4">
				<span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
				<span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
					name@flowbite.com
				</span>
			</div>
			<ul className="py-1" aria-labelledby="user-menu-button">
				<li>
					<a
						href="#"
						className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
					>
						Dashboard
					</a>
				</li>
				<li>
					<a
						href="#"
						className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
					>
						Settings
					</a>
				</li>
				<li>
					<a
						href="#"
						className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
					>
						Earnings
					</a>
				</li>
				<li>
					<a
						href="#"
						className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
					>
						Sign out
					</a>
				</li>
			</ul>
		</div>
	);
};
