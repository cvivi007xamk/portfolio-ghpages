import React from "react";
import { useState, useEffect } from "react";
import {
	Backdrop,
	CircularProgress,
	Container,
	Typography,
} from "@mui/material";
import Aloitus from "./SaaennusteComponents/Aloitus";
import Navigation from "./SaaennusteComponents/Navigation";
import Ennuste from "./SaaennusteComponents/Ennuste";
import { Routes, Route } from "react-router-dom";

function App() {
	const [data, setData] = useState({
		saatilanne: [],
		virhe: null,
		tiedotHaettu: false,
	});
	const [ennustedata, setEnnustedata] = useState({
		saaennuste: [],
		virhe: null,
		tiedotHaettu: false,
	});
	const [kaupunki, setKaupunki] = useState("sastamala");
	const [kaupunkiVirhe, setKaupunkiVirhe] = useState();
	const haeEnnusteJaTiedot = () => {
		haeEnnuste();
		haeTiedot();
	};
	const haeTiedot = async () => {
		try {
			const yhteys = await fetch(
				`https://xamkbit.herokuapp.com/saatilanne/${kaupunki}`
			);
			const saatiedot = await yhteys.json();

			if (saatiedot.cod === "404") {
				setKaupunkiVirhe("Kaupunkia ei löytynyt.");
			} else {
				setKaupunkiVirhe();
				setData({
					...data,
					saatilanne: saatiedot,
					tiedotHaettu: true,
				});
			}
		} catch (error) {
			setData({
				...data,
				saatilanne: [],
				tiedotHaettu: true,
				virhe: `VIRHE: yhteyttä palvelimelle ei voitu muodostaa. (${error})`,
			});
		}
	};
	const haeEnnuste = async () => {
		try {
			const yhteys = await fetch(
				`https://xamkbit.herokuapp.com/saaennuste/${kaupunki}`
			);
			const saaennustetiedot = await yhteys.json();

			if (saaennustetiedot.cod === "404") {
				setKaupunkiVirhe("Kaupunkia ei löytynyt.");
			} else {
				setKaupunkiVirhe();
				setEnnustedata({
					...ennustedata,
					saaennuste: saaennustetiedot,
					tiedotHaettu: true,
				});
			}
		} catch (error) {
			setEnnustedata({
				...ennustedata,
				saaennuste: [],
				tiedotHaettu: true,
				virhe: `VIRHE: yhteyttä palvelimelle ei voitu muodostaa. (${error})`,
			});
		}
	};

	useEffect(() => {
		haeTiedot();
		haeEnnuste();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<Navigation />

			<Container maxWidth="md">
				{data.virhe ? (
					<Typography color="error">{data.virhe}</Typography>
				) : data.tiedotHaettu ? (
					<Container maxWidth="md">
						<Routes>
							<Route
								path=""
								element={
									<Aloitus
										saatilanne={data.saatilanne}
										kaupunki={kaupunki}
										setKaupunki={setKaupunki}
										haeEnnusteJaTiedot={haeEnnusteJaTiedot}
										kaupunkiVirhe={kaupunkiVirhe}
									/>
								}
							/>

							<Route
								path="ennuste"
								element={
									<Ennuste
										saaennuste={ennustedata.saaennuste}
										kaupunki={kaupunki}
										setKaupunki={setKaupunki}
										haeEnnusteJaTiedot={haeEnnusteJaTiedot}
										kaupunkiVirhe={kaupunkiVirhe}
									/>
								}
							/>
						</Routes>
					</Container>
				) : (
					<Backdrop open={true}>
						<CircularProgress color="primary" />
					</Backdrop>
				)}
			</Container>
		</>
	);
}

export default App;
