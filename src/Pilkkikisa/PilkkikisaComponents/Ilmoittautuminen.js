import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
	Typography,
	FormControl,
	FormHelperText,
	TextField,
	Button,
	FormControlLabel,
	FormLabel,
	RadioGroup,
	Radio,
} from "@mui/material";

function Ilmoittautuminen(props) {
	const navigate = useNavigate();
	const [virheilmoitus, setVirheilmoitus] = useState({});
	const lomaketiedot = useRef({});
	const [radiovalue, setRadiovalue] = useState("");
	const formHandler = (event) => {
		event.preventDefault();
		let virheet = {};
		if (
			!lomaketiedot.current.etunimi ||
			lomaketiedot.current.etunimi.length < 2
		) {
			virheet = {
				...virheet,
				etunimi: "Etunimi puuttuu tai on liian lyhyt",
			};
		}
		if (
			!lomaketiedot.current.sukunimi ||
			lomaketiedot.current.sukunimi.length < 2
		) {
			virheet = {
				...virheet,
				sukunimi: "Sukunimi puuttuu tai on liian lyhyt",
			};
		}

		if (
			!lomaketiedot.current.puhelinnumero &&
			!lomaketiedot.current.sahkoposti
		) {
			virheet = {
				...virheet,
				puhelinnumero: "Täytä puhelinnumero tai sähköposti",
				sahkoposti: "Täytä puhelinnumero tai sähköposti",
			};
		}

		if (
			lomaketiedot.current.puhelinnumero &&
			(lomaketiedot.current.puhelinnumero.length < 10 ||
				lomaketiedot.current.puhelinnumero.length > 10 ||
				isNaN(lomaketiedot.current.puhelinnumero))
		) {
			virheet = {
				...virheet,
				puhelinnumero: "Virheellinen puhelinnumero",
			};
		}
		if (
			lomaketiedot.current.sahkoposti &&
			lomaketiedot.current.sahkoposti.search("@") === -1
		) {
			virheet = {
				...virheet,
				sahkoposti: "Virheellinen sähköpostiosoite",
			};
		}
		if (!lomaketiedot.current.ikasarja) {
			virheet = { ...virheet, ikasarja: "Valitse ikäsarja" };
		} else {
			setVirheilmoitus({});
		}

		if (Object.entries(virheet).length > 0) {
			setVirheilmoitus({ ...virheet });
		} else {
			setVirheilmoitus({});
			console.log(lomaketiedot.current);
			navigate("/pilkkikisa/kiitos", { state: lomaketiedot.current });
		}
	};

	const inputHandler = (event) => {
		if (event.target.type === "radio") {
			setRadiovalue(event.target.value);
			lomaketiedot.current[event.target.name] = event.target.value;
		} else {
			lomaketiedot.current[event.target.name] = event.target.value;
		}
	};

	return (
		<>
			<Typography align="center" variant="h3">
				Ilmoittautuminen
			</Typography>
			<form onSubmit={formHandler} noValidate autoComplete="off">
				<div>
					<TextField
						required
						variant="outlined"
						id="etunimi"
						name="etunimi"
						placeholder="Etunimi"
						label="Etunimi"
						error={Boolean(virheilmoitus.etunimi)}
						helperText={virheilmoitus.etunimi}
						onChange={inputHandler}
					/>
					<TextField
						required
						variant="outlined"
						id="sukunimi"
						name="sukunimi"
						placeholder="Sukunimi"
						label="Sukunimi"
						error={Boolean(virheilmoitus.sukunimi)}
						helperText={virheilmoitus.sukunimi}
						onChange={inputHandler}
					/>
					<br />
					<TextField
						variant="outlined"
						id="asuinpaikka"
						name="asuinpaikka"
						placeholder="Paikkakunta"
						label="Asuinpaikka"
						error={Boolean(virheilmoitus.asuinpaikka)}
						helperText={virheilmoitus.asuinpaikka}
						onChange={inputHandler}
					/>
					<br />
					<TextField
						variant="outlined"
						id="puhelinnumero"
						name="puhelinnumero"
						placeholder="0505050505"
						type="tel"
						label="Puhelinnumero"
						error={Boolean(virheilmoitus.puhelinnumero)}
						helperText={virheilmoitus.puhelinnumero}
						onChange={inputHandler}
					/>
					<TextField
						variant="outlined"
						id="sahkoposti"
						name="sahkoposti"
						placeholder="matti@meikalainen.com"
						type="email"
						label="Sähköposti"
						error={Boolean(virheilmoitus.sahkoposti)}
						helperText={virheilmoitus.sahkoposti}
						onChange={inputHandler}
					/>
					<br />
					<br />

					<FormControl
						error={Boolean(virheilmoitus.ikasarja)}
						component="fieldset"
					>
						<FormLabel component="legend">Ikäsarja</FormLabel>
						<FormHelperText>
							{virheilmoitus.ikasarja}
						</FormHelperText>

						<RadioGroup
							color="secondary"
							value={radiovalue}
							aria-label="ikasarja"
							name="ikasarja"
							onChange={inputHandler}
						>
							<FormControlLabel
								value="Alle 15 vuotiaat"
								control={<Radio color="primary" />}
								label="Alle 15 vuotiaat"
							/>
							<FormControlLabel
								value="15-19 vuotiaat"
								control={<Radio color="primary" />}
								label="15-19 vuotiaat"
							/>
							<FormControlLabel
								value="20-39 vuotiaat"
								control={<Radio color="primary" />}
								label="20-39 vuotiaat"
							/>
							<FormControlLabel
								value="40-59 vuotiaat"
								control={<Radio color="primary" />}
								label="40-59 vuotiaat"
							/>
							<FormControlLabel
								value="60-69 vuotiaat"
								control={<Radio color="primary" />}
								label="60-69 vuotiaat"
							/>
							<FormControlLabel
								value="70-79 vuotiaat"
								control={<Radio color="primary" />}
								label="70-79 vuotiaat"
							/>
							<FormControlLabel
								value="yli 80 vuotiaat"
								control={<Radio color="primary" />}
								label="yli 80 vuotiaat"
							/>
						</RadioGroup>
					</FormControl>

					<br />
					<br />
				</div>
				<Button variant="contained" color="primary" type="submit">
					Lähetä ilmoittautuminen
				</Button>
			</form>
			<br />
		</>
	);
}

export default Ilmoittautuminen;
