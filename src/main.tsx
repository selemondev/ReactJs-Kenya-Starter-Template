import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/css/tailwind.css";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	</React.StrictMode>
);
