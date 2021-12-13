import React from "react";
import BannerImage2 from "../offwhitebanner.png";

function VerkkokauppaFooter(props) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100px",
				backgroundImage: `url(${BannerImage2})`,
				margin: "10px",
				fontFamily: "'Helvetica', sans-serif",
				backgroundRepeat: "no-repeat",
				backgroundSize: "100%",
				textAlign: "center",
				fontSize: "0.9em",
				color: "#DC6FCB",
				fontWeight: "normal",
			}}
		>
			T-Paita Kauppa Oy <br />
			Käyntiosoite: Paitakatu 5, 38200 Paitakaupunki <br />
			Sähköposti: t@paita.fi / Puhelinnumero: 0404040404 <br />
			&copy; {new Date().getFullYear()}
		</div>
	);
}

export default VerkkokauppaFooter;
