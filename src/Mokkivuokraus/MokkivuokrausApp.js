import React from "react";
import { useState } from "react";
import {
	Container,
	Typography,
	Select,
	MenuItem,
	FormControl,
	FormHelperText,
	InputLabel,
	Slider,
	Checkbox,
	TextField,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControlLabel,
} from "@mui/material";

function MokkivuokrausApp() {
	const [mokki, setMokki] = useState("");
	const [paiva, setPaiva] = useState("");
	const [varaaja, setVaraaja] = useState("");
	const [open, setOpen] = useState(false);
	const [vuorokaudet, setVuorokaudet] = useState(1);
	const [hinta, setHinta] = useState("");
	const [siivous, setSiivous] = useState(false);

	const valitseMokki = (event) => {
		setHinta(event.target.value);
		setMokki(event.currentTarget.id);
	};

	const varaa = () => {
		setOpen(true);
	};
	const suljeVaraus = () => {
		setOpen(false);
	};
	const tallennaVaraus = () => {
		setOpen(false);
		alert("Varaus tallennettu");
	};
	const handleChange = (event, newValue) => {
		event.preventDefault();
		setVuorokaudet(newValue);
	};

	return (
		<Container maxWidth="sm">
			<br />
			<Typography variant="h4">Lomamökkivuokraus</Typography>
			<br />
			<FormControl>
				<InputLabel>Mökki</InputLabel>
				<Select value={hinta} onChange={valitseMokki}>
					<MenuItem id="Mökkerö" value={100}>
						Mökkerö: 100 €/vrk
					</MenuItem>
					<MenuItem id="Hökkeli" value={80}>
						Hökkeli: 80 €/vrk
					</MenuItem>
					<MenuItem id="Tölli" value={150}>
						Tölli: 150 €/vrk
					</MenuItem>
					<MenuItem id="Röttelö" value={75}>
						Röttelö: 75 €/vrk
					</MenuItem>
				</Select>
				<FormHelperText>Valitse haluamasi mökki</FormHelperText>
			</FormControl>
			<br />
			<br />
			<Typography display="inline">
				Vuokra-aika ({vuorokaudet} vrk) :
			</Typography>
			<Slider
				value={vuorokaudet}
				onChange={handleChange}
				valueLabelDisplay="auto"
				step={1}
				marks
				min={1}
				max={14}
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={siivous}
						onChange={(event) => {
							event.target.checked
								? setSiivous(true)
								: setSiivous(false);
						}}
						color="primary"
					/>
				}
				label="Loppusiivouspalvelu"
			></FormControlLabel>
			<br />
			<Typography>
				Varauksen kokonaissumma:{" "}
				{hinta * vuorokaudet + (siivous ? 100 : 0)} €
			</Typography>
			<br />

			<TextField
				InputLabelProps={{ shrink: true }}
				label="Varaajan nimi"
				placeholder="Etunimi Sukunimi"
				variant="filled"
				onChange={(event) => {
					setVaraaja(event.target.value);
				}}
				type="text"
			></TextField>
			<br />
			<br />

			<TextField
				defaultValue={paiva}
				InputLabelProps={{ shrink: true }}
				label="Saapumispäivä"
				variant="filled"
				onChange={(event) => {
					setPaiva(event.target.value);
				}}
				type="date"
			></TextField>
			<br />
			<br />
			<Button onClick={varaa} variant="contained" color="primary">
				Varaa mökki
			</Button>
			<Dialog
				onClose={suljeVaraus}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<DialogTitle id="customized-dialog-title" onClose={suljeVaraus}>
					Varauksen yhteenveto
				</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom>
						Varaamasi mökki: {mokki}{" "}
					</Typography>
					<Typography gutterBottom>
						Vuokra-aika: {vuorokaudet} vuorokautta
					</Typography>
					<Typography gutterBottom>
						Loppusiivous: {siivous ? "Kyllä" : "Ei"}
					</Typography>

					<Typography gutterBottom>
						Loppusumma: {hinta * vuorokaudet + (siivous ? 100 : 0)}{" "}
						€
					</Typography>
					<Typography gutterBottom>
						Saapumispäivämäärä: {paiva}
					</Typography>
					<Typography gutterBottom>
						Varaajan nimi: {varaaja}{" "}
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button
						autoFocus
						variant="contained"
						onClick={suljeVaraus}
						color="primary"
					>
						Peruuta
					</Button>
					<Button
						autoFocus
						variant="contained"
						onClick={tallennaVaraus}
						color="primary"
					>
						Tallenna varaus
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
}

export default MokkivuokrausApp;
