import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { CafeteriaApp } from "./CafeteriaApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	
		<Provider store={store}>
			<BrowserRouter>
				<CafeteriaApp />
			</BrowserRouter>
		</Provider>
	
);
