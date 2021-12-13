import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useState, useRef } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { DateTimePicker } from "@mui/lab";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

function MuokkaaLintua(props) {
	const navigate = useNavigate();
	const [uusiaika, setUusiaika] = useState(null);
	const { id } = useParams();
	const lomaketiedot = useRef({});

	const inputHandler = (event) => {
		lomaketiedot.current[event.target.name] = event.target.value;
	};

	const muokattavaLintu = props.linnut.filter((lintu) => {
		return lintu.id === id;
	})[0];

	const formHandler = (event) => {
		event.preventDefault();
		let uusilaji = "";
		let uusipaikka = "";
		let uusiaikaApu = muokattavaLintu.aika;

		if (
			lomaketiedot.current.lintulaji &&
			lomaketiedot.current.lintulaji.length > 0
		) {
			uusilaji = lomaketiedot.current.lintulaji;
		} else {
			uusilaji = muokattavaLintu.lintulaji;
		}
		if (
			lomaketiedot.current.paikka &&
			lomaketiedot.current.paikka.length > 0
		) {
			uusipaikka = lomaketiedot.current.paikka;
		} else {
			uusipaikka = muokattavaLintu.paikka;
		}
		if (uusiaika) {
			uusiaikaApu = uusiaika.getTime();
		} else {
			uusiaikaApu = muokattavaLintu.aika;
		}

		let muokattuLintu = {
			id: muokattavaLintu.id,
			lintulaji: uusilaji,
			paikka: uusipaikka,
			aika: uusiaikaApu,
		};

		let linnutApu = props.linnut.filter((lintu) => {
			return lintu.id !== id;
		});

		props.setLinnut([...linnutApu, muokattuLintu]);
		navigate("/lintubongaus");
	};

	return (
		<>
			<Typography
				variant="h3"
				style={{ marginBottom: 10, marginTop: 10 }}
			>
				Muokkaa tätä lintuhavaintoa:
			</Typography>

			<Typography style={{ marginBottom: 10, marginRight: 10 }}>
				Laji: {muokattavaLintu.lintulaji}
				<br />
				Havaintopaikka: {muokattavaLintu.paikka}
				<br />
				Havaintopäivä: {format(muokattavaLintu.aika, "d.M.y")}
				<br />
				Havaintoaika: {format(muokattavaLintu.aika, "HH:mm")}
			</Typography>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<form onSubmit={formHandler} noValidate autoComplete="off">
					<TextField
						label="Uusi laji"
						required
						variant="outlined"
						id="lintulaji"
						name="lintulaji"
						onChange={inputHandler}
					/>
					<TextField
						label="Uusi havaintopaikka"
						required
						variant="outlined"
						id="paikka"
						name="paikka"
						onChange={inputHandler}
					/>
					<br />
					<DateTimePicker
						required
						label="Uusi havaintoaika"
						inputVariant="outlined"
						cancelLabel="Peruuta"
						ampm={false}
						value={uusiaika}
						format="d.M.y HH:mm"
						onChange={setUusiaika}
						disableFuture
						strictCompareDates
						maxDateMessage="Valittu aika ei voi olla tulevaisuudessa."
						clearable
						clearLabel="Tyhjennä"
					/>

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
						Tallenna muutokset{" "}
					</Button>
					<Button
						component={Link}
						to="/lintubongaus"
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
		</>
	);
}

export default MuokkaaLintua;
