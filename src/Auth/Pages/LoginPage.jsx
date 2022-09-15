import { React } from "react";
export const LoginPage = () => {
	return (
	
			<div
				id="authentication-modal"
				tabIndex="-1"
				aria-hidden="true"
				className="inline-flex bg-gray-600 w-full h-screen   justify-center items-center "
			>
				<div className=" p-4 w-full max-w-md h-full md:h-auto">
					<div className=" bg-white rounded-lg shadow dark:bg-gray-700">
						<div className="py-6 px-6 lg:px-8">
							<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
								Sign in to our platform
							</h3>
							<form className="space-y-6" action="#">
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
										placeholder="name@company.com"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Your password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
										required
									/>
								</div>
								<div className="flex justify-between">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<input
												id="remember"
												type="checkbox"
												value=""
												className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
												required
											/>
										</div>
										<label
											htmlFor="remember"
											className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
										>
											Remember me
										</label>
									</div>
									<a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
										Lost Password?
									</a>
								</div>
								<button
									type="submit"
									className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Login to your account
								</button>
								<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
									Not registered?{" "}
									<a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
										Create account
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		
	);
};
