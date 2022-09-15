import { React } from "react";
import { DatePicker } from "../Components/DatePicker/DatePicker";
import { CafeteriaLayout } from "../Layout/CafeteriaLayout";
export const DashboardPage = () => {
	return (
		<>
			<CafeteriaLayout>
				<div className="flex  flex-col items-center">
					<p className="justify-left pb-4">Dashboard under construccion</p>
					<DatePicker />
				</div>
			</CafeteriaLayout>
		</>
	);
};
