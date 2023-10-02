import { Suspense } from "react";
import routes from "~react-pages";
import LoaderComponent from "@/components/LoaderComponent";
import DefaultLayout from "./layouts/DefaultLayout";

const App = () => {
	return (
		<>
			<DefaultLayout>
				<Suspense fallback={<LoaderComponent />}>{useRoutes(routes)}</Suspense>
			</DefaultLayout>
		</>
	);
};

export default App;
