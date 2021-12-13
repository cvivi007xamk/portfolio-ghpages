import React from "react";
function Tuotenostot(props) {
	return (
		<div
			style={{
				display: "inline-block",
				width: "700px",

				fontFamily: "'Helvetica', sans-serif",
			}}
		>
			{props.children}
		</div>
	);
}

export default Tuotenostot;
