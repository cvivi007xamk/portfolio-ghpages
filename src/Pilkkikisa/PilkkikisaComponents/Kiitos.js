import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Kiitos(props) {
	const location = useLocation();
	console.log(location.state);

	return (
		<>
			<Typography align="center" variant="h4">
				Ilmoittautuminen on vastaanotettu. Kiitos!
			</Typography>
			<Typography variant="h5">Ilmoittautujan tiedot:</Typography>
			<Typography>
				Etunimi: {location.state.etunimi}
				<br />
				Sukunimi: {location.state.sukunimi}
				<br />
				Asuinpaikka: {location.state.asuinpaikka}
				<br />
				Puhelinnumero: {location.state.puhelinnumero}
				<br />
				Sähköposti: {location.state.sahkoposti}
				<br />
				Ikäsarja: {location.state.ikasarja}
				<br />
			</Typography>
			<Typography align="center"></Typography>
			<Box textAlign="center">
				<Button
					component={Link}
					to="/pilkkikisa"
					variant="contained"
					color="primary"
				>
					Palaa etusivulle
				</Button>
			</Box>
		</>
	);
}

export default Kiitos;
