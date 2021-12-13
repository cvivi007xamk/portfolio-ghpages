import React from "react";
function Pikaostoskori(props) {
	return (
		<div
			style={{
				display: "inline-block",
				width: "220px",
				height: "280px",
				fontFamily: " 'Helvetica', sans-serif",
				position: "absolute",
				top: "645px",
				borderStyle: "solid",
				borderColor: "black",
				borderWidth: "1px",
				padding: "5PX",
			}}
		>
			<div>
				<h3>Ostoskori</h3>

				{props.tuotemaara === 0
					? "Ostoskorissa ei ole tuotteita"
					: props.kirjautunut === true
					? `Ostoskorissa on ${
							props.tuotemaara
					  } tuotetta, loppusumma ${props.yhteissumma * 0.8} €`
					: `Ostoskorissa on ${props.tuotemaara} tuotetta, loppusumma ${props.yhteissumma} €`}
			</div>
			<div>
				{props.tuotemaara === 0 ? null : (
					<button
						style={{
							display: "inline-block",
							marginLeft: "80px",
							marginTop: "5px",
						}}
						onClick={() => alert("Jatketaan tilaukseen...")}
					>
						Tilaa tuotteet
					</button>
				)}
			</div>
		</div>
	);
}

export default Pikaostoskori;
