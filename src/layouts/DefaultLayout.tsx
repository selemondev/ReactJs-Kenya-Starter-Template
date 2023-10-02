import React from "react";
import FooterBar from "@/components/Footer/FooterBar";
const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div>
			{children}
			<FooterBar />
		</div>
	);
};

export default DefaultLayout;
