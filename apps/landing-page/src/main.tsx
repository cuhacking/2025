import React from "react";
import "../tailwind.css";
import "./main.scss";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/homePage/HomePage.tsx";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Apply } from "./pages/applicationPage/Apply.tsx";
import { NavBar } from "./components/NavBar.tsx";

const RootProviders = (props: { children: React.ReactNode }) => {
	return (
		<StyletronProvider value={new Styletron()}>
			{/* <div data-theme="light"> */}
				<NavBar>{props.children}</NavBar>
			{/* </div> */}
		</StyletronProvider>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<RootProviders>
				<HomePage />
			</RootProviders>
		),
	},
	{
		path: "/apply",
		element: (
			<RootProviders>
				<Apply />
			</RootProviders>
		),
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
