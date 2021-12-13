import React from "react";
function VerkkokauppaSivu(props) {
	return (
		<div
			style={{
				margin: "auto",
				fontFamily: "'Helvetica', sans-serif",
				width: "960px",
				display: "block",
				position: "relative",
			}}
		>
			{props.children}
		</div>
	);
}

export default VerkkokauppaSivu;
