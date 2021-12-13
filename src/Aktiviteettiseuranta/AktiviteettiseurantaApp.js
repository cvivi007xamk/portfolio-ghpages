import React from "react";
import { useState } from "react";
import { Container, Box } from "@mui/material";
import Aktiviteetit from "./AktiviteettiseurantaComponents/Aktiviteetit";
import Aloitus from "./AktiviteettiseurantaComponents/Aloitus";
import LisaaSuoritus from "./AktiviteettiseurantaComponents/LisaaSuoritus";
import PoistaSuoritus from "./AktiviteettiseurantaComponents/PoistaSuoritus";
import Navigation from "./AktiviteettiseurantaComponents/Navigation";
import { Routes, Route } from "react-router-dom";

function AktiviteettiseurantaApp(props) {
	const [sportTabValue, setSportTabValue] = useState(0);
	const [suoritukset, setSuoritukset] = useState([]);
	const [kokonaiskesto, setKokonaiskesto] = useState(0);

	return (
		<>
			<Navigation
				sportTabValue={sportTabValue}
				setSportTabValue={setSportTabValue}
			/>

			<Box
				sx={{ margin: "auto", marginTop: "50px", textAlign: "center" }}
			>
				<Container maxWidth="md">
					<Routes>
						<Route
							path=""
							element={
								<Aloitus
									kokonaiskesto={kokonaiskesto}
									suoritukset={suoritukset}
									sportTabValue={sportTabValue}
									setSportTabValue={setSportTabValue}
								/>
							}
						/>

						<Route
							path="allworkouts"
							element={
								<Aktiviteetit
									suoritukset={suoritukset}
									sportTabValue={sportTabValue}
									setSportTabValue={setSportTabValue}
								/>
							}
						/>

						<Route
							path="addworkout"
							element={
								<LisaaSuoritus
									suoritukset={suoritukset}
									setSuoritukset={setSuoritukset}
									setKokonaiskesto={setKokonaiskesto}
									sportTabValue={sportTabValue}
									setSportTabValue={setSportTabValue}
								/>
							}
						/>

						<Route
							path="delete-workout/:indeksi"
							element={
								<PoistaSuoritus
									suoritukset={suoritukset}
									setSuoritukset={setSuoritukset}
									sportTabValue={sportTabValue}
									setSportTabValue={setSportTabValue}
								/>
							}
						/>
					</Routes>
				</Container>
			</Box>
		</>
	);
}

export default AktiviteettiseurantaApp;
