import React from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, TextField, Button, Container } from "@mui/material";
import { DateTimePicker } from "@mui/lab";
import { differenceInMinutes } from "date-fns";
import fi from "date-fns/locale/fi";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

function LisaaSuoritus(props) {
	const navigate = useNavigate();
	const kuvaus = useRef();

	const [virheilmoitus, setVirheilmoitus] = useState({});
	const lomaketiedot = useRef({});
	const [aloitus, setAloitus] = useState(null);
	const [lopetus, setLopetus] = useState(null);
	var tanaan = new Date();

	if (!props.suoritukset) return null;

	const inputHandler = (event) => {
		lomaketiedot.current[event.target.name] = event.target.value;
	};

	const formHandler = (event) => {
		event.preventDefault();
		let virheet = {};
		let uusiSuoritus = {
			kuvaus: kuvaus.current.value,
			aloitus: aloitus,
			lopetus: lopetus,
			kesto: differenceInMinutes(lopetus, aloitus),
		};

		if (!lomaketiedot.current.kuvaus) {
			virheet = {
				...virheet,
				kuvaus: "Description missing.",
			};
		}

		if (differenceInMinutes(lopetus, aloitus) < 1) {
			virheet = {
				...virheet,
				lopetus: "End time can't be before the start time.",
			};
		}

		if (differenceInMinutes(tanaan, aloitus) < 1) {
			virheet = {
				...virheet,
				aloitus: "Start time can't be in the future.",
			};
		}
		if (differenceInMinutes(tanaan, lopetus) < 1) {
			virheet = {
				...virheet,
				lopetus: "End time can't be in the future.",
			};
		} else {
			setVirheilmoitus({});
		}

		if (Object.entries(virheet).length > 0) {
			setVirheilmoitus({ ...virheet });
		} else {
			setVirheilmoitus({});
			props.setSuoritukset([...props.suoritukset, uusiSuoritus]);
			let kokonaiskestoApu = differenceInMinutes(lopetus, aloitus);
			for (var i = 0; i < props.suoritukset.length; i++) {
				kokonaiskestoApu += props.suoritukset[i].kesto;
			}
			props.setKokonaiskesto(kokonaiskestoApu);
			props.setSportTabValue(1);
			navigate("/workouts/allworkouts");
		}
	};

	return (
		<Container>
			<Typography align="center" variant="h3">
				Add new workout
			</Typography>
			<form onSubmit={formHandler} noValidate autoComplete="off">
				<TextField
					label="Workout description"
					inputRef={kuvaus}
					required
					variant="outlined"
					id="kuvaus"
					name="kuvaus"
					error={Boolean(virheilmoitus.kuvaus)}
					helperText={virheilmoitus.kuvaus}
					onChange={inputHandler}
					sx={{
						margin: "auto",
						marginTop: "20px",
						marginBottom: "20px",
					}}
				/>
				<br />

				<LocalizationProvider dateAdapter={AdapterDateFns} locale={fi}>
					<DateTimePicker
						renderInput={(props) => <TextField {...props} />}
						label="Start time"
						value={aloitus}
						onChange={(newValue) => {
							setAloitus(newValue);
						}}
						disableFuture
						strictCompareDates
						maxDateMessage="Chosen time can't be in the future."
						error={Boolean(virheilmoitus.aloitus)}
						helperText={virheilmoitus.aloitus}
						clearable
						clearLabel="Clear"
						sx={{ marginTop: "20px", marginBottom: "20px" }}
					/>
				</LocalizationProvider>
				<br />
				<br />
				<LocalizationProvider dateAdapter={AdapterDateFns} locale={fi}>
					<DateTimePicker
						renderInput={(props) => <TextField {...props} />}
						label="End time"
						value={lopetus}
						onChange={(newValue) => {
							setLopetus(newValue);
						}}
						disableFuture
						strictCompareDates
						maxDateMessage="Chosen time can't be in the future."
						error={Boolean(virheilmoitus.lopetus)}
						helperText={virheilmoitus.lopetus}
						sx={{ marginTop: "20px", marginBottom: "20px" }}
					/>
				</LocalizationProvider>
				<br />
				<Button
					type="submit"
					variant="contained"
					color="primary"
					sx={{
						marginTop: "10px",
						marginBottom: "10px",
						marginLeft: "5px",
						marginRight: "5px",
					}}
				>
					Add workout
				</Button>
				<Button
					component={Link}
					to="/workouts"
					variant="contained"
					sx={{
						marginTop: "10px",
						marginBottom: "10px",
						marginLeft: "5px",
						marginRight: "5px",
						backgroundColor: "secondary.dark",
						color: "#fff",
					}}
				>
					Cancel
				</Button>
				<br />
			</form>

			{/* <LocalizationProvider dateAdapter={AdapterDateFns}>
				<form onSubmit={formHandler} noValidate autoComplete="off">
					<TextField
						label="Workout description"
						inputRef={kuvaus}
						required
						variant="outlined"
						id="kuvaus"
						name="kuvaus"
						error={Boolean(virheilmoitus.kuvaus)}
						helperText={virheilmoitus.kuvaus}
						onChange={inputHandler}
					/>
					<br />
					<DateTimePicker
						required
						label="Start time"
						inputVariant="outlined"
						cancelLabel="Cancel"
						ampm={false}
						value={aloitus}
						format="d.M.y HH:mm"
						onChange={setAloitus}
						disableFuture
						strictCompareDates
						maxDateMessage="Chosen time can't be in the future."
						error={Boolean(virheilmoitus.aloitus)}
						helperText={virheilmoitus.aloitus}
						clearable
						clearLabel="Clear"
					/>
					<DateTimePicker
						required
						label="End time"
						inputVariant="outlined"
						cancelLabel="Cancel"
						ampm={false}
						value={lopetus}
						format="d.M.y HH:mm"
						onChange={setLopetus}
						disableFuture
						strictCompareDates
						maxDateMessage="Chosen time can't be in the future."
						error={Boolean(virheilmoitus.lopetus)}
						helperText={virheilmoitus.lopetus}
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
						Add workout
					</Button>
					<Button
						component={Link}
						to="workouts"
						variant="contained"
						color="secondary"
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							marginLeft: "5px",
							marginRight: "5px",
						}}
					>
						Cancel
					</Button>
					<br />
				</form>
			</LocalizationProvider>
			<br /> */}
		</Container>
	);
}

export default LisaaSuoritus;
