import React from "react";
function Tuotelokero(props) {
	return (
		<div
			style={{
				marginRight: "10px",
				marginBottom: "20px",
				display: "inline-block",
				width: "220px",
				textAlign: "center",
				fontSize: "0.9em",
			}}
		>
			<img src={props.tuotekuva} alt={props.tuotenimi} width="220"></img>
			{props.tuotenimi} <br />
			{props.kirjautunut === true ? (
				<div>
					<s>OVH: {props.tuotehinta}€</s> <br />
					<div>ALE: {props.tuotehinta * 0.8}€ </div>
				</div>
			) : (
				<div> OVH: {props.tuotehinta}€</div>
			)}
			<br />
			<button
				onClick={() => {
					props.lisaaKoriin(props.tuotehinta);
				}}
			>
				Lisää ostoskoriin
			</button>
		</div>
	);
}

export default Tuotelokero;
