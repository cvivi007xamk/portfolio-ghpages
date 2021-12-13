import React from "react";
import { Typography, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { differenceInMinutes } from "date-fns";

function Aloitus(props) {
	const navigate = useNavigate();

	let kokonaiskesto = 0;
	let viikkokesto = 0;
	for (var i = 0; i < props.suoritukset.length; i++) {
		if (
			differenceInMinutes(new Date(), props.suoritukset[i].lopetus) <
			10081
		) {
			viikkokesto += props.suoritukset[i].kesto;
		} else {
			viikkokesto += 0;
		}
	}
	for (var j = 0; j < props.suoritukset.length; j++) {
		kokonaiskesto += props.suoritukset[j].kesto;
	}

	const addClick = () => {
		props.setSportTabValue(2);
		navigate("/workouts/addworkout");
	};
	return (
		<>
			<Typography align="center" variant="h2">
				Summary
			</Typography>
			<br />
			<Typography>Total workout time during the last 7 days:</Typography>
			<Typography variant="h5">
				{`${Math.floor(Number(viikkokesto / 60))} hours and ${Number(
					viikkokesto % 60
				)} minutes `}
			</Typography>
			<br />
			<Typography> Total workout time:</Typography>
			<Typography variant="h5">
				{`${Math.floor(Number(kokonaiskesto / 60))} hours and ${Number(
					kokonaiskesto % 60
				)} minutes `}
			</Typography>
			<br />
			<Fab color="primary" aria-label="add" onClick={addClick}>
				<AddIcon />
			</Fab>
		</>
	);
}

export default Aloitus;
