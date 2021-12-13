import React from "react";
import { useState } from "react";

function Kirjautuminen(props) {
	const [nappulateksti, setNappulateksti] = useState("Kirjaudu");
	const [tunnus, setTunnus] = useState("");
	const [salasana, setSalasana] = useState("");
	const kirjautumisTapahtuma = () => {
		props.kirjaudu();
		setTunnus("");
		setSalasana("");
		setNappulateksti("Kirjaudu ulos");
	};
	const ulosKirjautuminen = () => {
		props.uloskirjaudu();
		setNappulateksti("Kirjaudu");
	};

	return (
		<div
			style={{
				display: "inline-block",
				width: "250px",
				height: "300px",
				fontFamily: "'Arial', 'Helvetica', sans-serif",
				verticalAlign: "top",
				position: "absolute",
				top: "280px",
			}}
		>
			<h3>Kirjaudu sisään:</h3>
			<p>Käytä testaukseen tunnusta: testi ja salasanaa: testi</p>
			{props.kirjautunut ? (
				"Olet kirjautunut sisään tunnuksella: testi"
			) : (
				<div id="form">
					<label
						style={{
							display: "inline-block",
							width: "80px",
							textAlign: "right",
						}}
					>
						Tunnus:
					</label>
					<input
						style={{
							marginBottom: "5px",
						}}
						type="text"
						placeholder="Syötä käyttäjätunnus..."
						value={tunnus}
						onChange={(e) => {
							setTunnus(e.target.value);
						}}
					/>{" "}
					<br />
					<label
						style={{
							display: "inline-block",
							width: "80px",
							textAlign: "right",
						}}
					>
						Salasana:
					</label>
					<input
						type="text"
						placeholder="Syötä salasana..."
						value={salasana}
						onChange={(e) => {
							setSalasana(e.target.value);
						}}
					/>
				</div>
			)}
			<br />
			<button
				style={{
					display: "inline-block",
					marginLeft: "80px",
					marginTop: "5px",
				}}
				onClick={() => {
					tunnus === "testi" && salasana === "testi"
						? kirjautumisTapahtuma()
						: ulosKirjautuminen();
				}}
			>
				{nappulateksti}
			</button>
			<br />
			<br />
		</div>
	);
}

export default Kirjautuminen;
