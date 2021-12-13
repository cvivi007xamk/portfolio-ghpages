import React from "react";
import {
	List,
	ListItem,
	ListItemText,
	Typography,
	IconButton,
	ListItemIcon,
	Fab,
} from "@mui/material";

import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function Aktiviteetit(props) {
	const navigate = useNavigate();

	props.suoritukset.sort(function (a, b) {
		return new Date(b.lopetus) - new Date(a.lopetus);
	});
	const addClick = () => {
		props.setSportTabValue(2);
		navigate("/workouts/addworkout");
	};

	return (
		<>
			<Typography variant="h3">Workouts</Typography>
			<List>
				{props.suoritukset.map((suoritus, idx) => {
					return (
						<ListItem key={idx}>
							<ListItemText
								primary={suoritus.kuvaus}
								secondary="Description"
							/>
							<ListItemText
								primary={format(
									suoritus.aloitus,
									"d.M.y HH:mm"
								)}
								secondary="Start time"
							/>
							<ListItemText
								primary={format(
									suoritus.lopetus,
									"d.M.y HH:mm"
								)}
								secondary="End time"
							/>
							<ListItemText
								primary={`${Math.floor(
									Number(suoritus.kesto / 60)
								)} hours and ${Number(
									suoritus.kesto % 60
								)} minutes `}
								secondary="Duration"
							/>
							<ListItemIcon>
								<IconButton
									edge="end"
									component={Link}
									to={`/workouts/delete-workout/${idx}`}
								>
									<DeleteIcon />
								</IconButton>
							</ListItemIcon>
						</ListItem>
					);
				})}
			</List>
			<Fab color="primary" aria-label="add" onClick={addClick}>
				<AddIcon />
			</Fab>
		</>
	);
}

export default Aktiviteetit;
