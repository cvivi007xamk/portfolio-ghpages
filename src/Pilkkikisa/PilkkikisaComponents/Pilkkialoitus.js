import React from "react";
import { Typography } from "@mui/material";
import pilkkikuva from "./pilkki.jpg";

function Pilkkialoitus(props) {
	return (
		<>
			<img
				style={{
					display: "block",
					margin: "auto",
					marginTop: "10px",
					marginBottom: "10px",
				}}
				src={pilkkikuva}
				alt="Pilkki"
			/>
			<Typography align="center" variant="h2">
				Tervetuloa pilkkimään!
			</Typography>
			<br />
			<Typography>
				Kyläkauppa järjestää Mini Miljoona Pilkin sunnuntaina 30.3.2021
				klo 12.00 – 13.00 Rautionlammella Ähtärin Peränteellä. Paikalle
				kannattaa tulla ajoissa hyvän parkkipaikan varmistamiseksi.
				Varaa mukaan lämpimät vaatteet ja asianmukaiset jalkineet. Omat
				eväät kannattaa pakata reppuun, sillä ne maistuvat aina hyviltä
				ulkona luonnossa. Pilkkialueella on myynnissä grillimakkaraa ja
				virvokkeita.
			</Typography>
		</>
	);
}

export default Pilkkialoitus;
