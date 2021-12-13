import React from "react";
import BannerImage from "../offwhitebanner2.jpg";

function VerkkokauppaHeader(props) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "250px",
				backgroundImage: `url(${BannerImage})`,
				margin: "10px",
				paddingLeft: "420px",
				fontFamily: "'Helvetica', sans-serif",
				backgroundRepeat: "no-repeat",
				backgroundSize: "100%",
				textAlign: "center",
				fontSize: "5em",
				color: "#DC6FCB",
				fontWeight: "bolder",
			}}
		>
			{props.children}
		</div>
	);
}

export default VerkkokauppaHeader;
