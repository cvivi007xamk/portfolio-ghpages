import React from "react";
import {
	List,
	ListItem,
	ListItemText,
	Typography,
	IconButton,
	ListItemIcon,
	Button,
} from "@mui/material";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function BongatutLinnut(props) {
	props.linnut.sort(function (a, b) {
		return new Date(b.aika) - new Date(a.aika);
	});

	return (
		<>
			<Typography variant="h3">Kaikki bongaamasi linnut</Typography>
			<List>
				{props.linnut.map((lintu, idx) => {
					return (
						<ListItem key={idx}>
							<ListItemText
								primary={lintu.lintulaji}
								secondary="Lintulaji"
							/>
							<ListItemText
								primary={lintu.paikka}
								secondary="Havaintopaikka"
							/>
							<ListItemText
								primary={format(lintu.aika, "d.M.y")}
								secondary="Havaintopäivä"
							/>
							<ListItemText
								primary={format(lintu.aika, "HH:mm")}
								secondary="Havaintoaika"
							/>
							<ListItemIcon>
								<Button
									component={Link}
									to={`muokkaalintua/${lintu.id}`}
									variant="contained"
									//color="secondary"
									style={{
										marginTop: "10px",
										marginBottom: "10px",
										marginLeft: "5px",
										marginRight: "5px",
									}}
								>
									Muokkaa
								</Button>
							</ListItemIcon>

							<ListItemIcon>
								<IconButton
									edge="end"
									component={Link}
									to={`poistalintu/${lintu.id}`}
								>
									<DeleteIcon />
								</IconButton>
							</ListItemIcon>
						</ListItem>
					);
				})}
			</List>
		</>
	);
}

export default BongatutLinnut;
