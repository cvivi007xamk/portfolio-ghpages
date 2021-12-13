import React from "react";
import { Button, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

function PoistaSuoritus(props) {
	const navigate = useNavigate();
	let { indeksi } = useParams();
	console.log("props.suoritukset[indeksi]=", props.suoritukset[indeksi]);
	console.log(props.suoritukset[indeksi].kuvaus);
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const formHandler = () => {
		let suorituksetApu = props.suoritukset.filter((suoritus, idx) => {
			return idx !== Number(indeksi);
		});

		props.setSuoritukset([...suorituksetApu]);
		props.setSportTabValue(0);

		navigate("/workouts");
	};
	const cancelClick = () => {
		props.setSportTabValue(0);
		navigate("/workouts");
	};

	return (
		<>
			<Typography variant="h3" sx={{ marginBottom: 10, marginTop: 10 }}>
				Are you sure you want to delete this workout:
			</Typography>

			<Typography>
				Description: {props.suoritukset[indeksi].kuvaus} <br />
				Start time:{" "}
				{props.suoritukset[indeksi].aloitus.toLocaleDateString(
					"fi-FI",
					options
				)}{" "}
				<br />
				End time:{" "}
				{props.suoritukset[indeksi].lopetus.toLocaleDateString(
					"fi-FI",
					options
				)}{" "}
				<br />
				Duration:{" "}
				{`${Math.floor(
					Number(props.suoritukset[indeksi].kesto / 60)
				)} hours and ${Number(
					props.suoritukset[indeksi].kesto % 60
				)} minutes`}{" "}
				<br />
			</Typography>

			<Button
				onClick={formHandler}
				variant="contained"
				color="primary"
				sx={{
					marginTop: "10px",
					marginBottom: "10px",
					marginLeft: "5px",
					marginRight: "5px",
				}}
			>
				Delete workout
			</Button>

			<Button
				onClick={cancelClick}
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
		</>
	);
}

export default PoistaSuoritus;
