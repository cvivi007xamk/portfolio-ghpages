import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { v4 as uuid } from "uuid";

function LisaaLintu(props) {
	const navigate = useNavigate();
	const [virheilmoitus, setVirheilmoitus] = useState({});
	const lomaketiedot = useRef({});

	const inputHandler = (event) => {
		lomaketiedot.current[event.target.name] = event.target.value;
	};

	const formHandler = (event) => {
		event.preventDefault();
		let virheet = {};
		let aikaApu = new Date();
		let uusiLintu = {
			id: uuid(),
			lintulaji: lomaketiedot.current.lintulaji,
			paikka: lomaketiedot.current.paikka,
			aika: aikaApu.getTime(),
		};

		if (!lomaketiedot.current.lintulaji) {
			virheet = {
				...virheet,
				lintulaji: "Lintulaji puuttuu.",
			};
		}
		if (!lomaketiedot.current.paikka) {
			virheet = {
				...virheet,
				paikka: "Paikka puuttuu.",
			};
		} else {
			setVirheilmoitus({});
		}

		if (Object.entries(virheet).length > 0) {
			setVirheilmoitus({ ...virheet });
		} else {
			setVirheilmoitus({});
			props.setLinnut([...props.linnut, uusiLintu]);
			navigate("");
		}
	};

	return (
		<>
			<Typography align="center" variant="h3">
				Lisää bongattu lintu
			</Typography>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<form onSubmit={formHandler} noValidate autoComplete="off">
					<TextField
						label="Havaittu lintu"
						required
						variant="outlined"
						id="lintulaji"
						name="lintulaji"
						error={Boolean(virheilmoitus.lintulaji)}
						helperText={virheilmoitus.lintulaji}
						onChange={inputHandler}
					/>
					<TextField
						label="Havainnon paikka"
						required
						variant="outlined"
						id="paikka"
						name="paikka"
						error={Boolean(virheilmoitus.paikka)}
						helperText={virheilmoitus.paikka}
						onChange={inputHandler}
					/>
					<br />
					<br />
					<Button
						type="submit"
						variant="contained"
						color="primary"
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							marginLeft: "5px",
							marginRight: "5px",
						}}
					>
						Lisää lintu
					</Button>
					<Button
						component={Link}
						to="/"
						variant="contained"
						color="secondary"
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							marginLeft: "5px",
							marginRight: "5px",
						}}
					>
						Peruuta
					</Button>
					<br />
				</form>
			</LocalizationProvider>
			<br />
		</>
	);
}

export default LisaaLintu;
