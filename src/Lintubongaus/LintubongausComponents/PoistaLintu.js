import React from "react";
import { Button, Typography } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";

function PoistaLintu(props) {
	const navigate = useNavigate();
	const { id } = useParams();
	console.log(id);
	console.log(props.linnut);
	const poistettavaLintu = props.linnut.filter((lintu) => {
		return lintu.id === id;
	})[0];
	const formHandler = (event) => {
		event.preventDefault();

		let linnutApu = props.linnut.filter((lintu) => {
			return lintu.id !== id;
		});

		props.setLinnut([...linnutApu]);

		navigate("/lintubongaus");
	};

	return (
		<form onSubmit={formHandler}>
			<Typography
				variant="h3"
				style={{ marginBottom: 10, marginTop: 10 }}
			>
				Haluatko varmasti poistaa havainnon:
			</Typography>

			<Typography style={{ marginBottom: 10, marginRight: 10 }}>
				Laji: {poistettavaLintu.lintulaji}
				<br />
				Havaintopaikka: {poistettavaLintu.paikka}
				<br />
				Havaintopäivä: {format(poistettavaLintu.aika, "d.M.y")}
				<br />
				Havaintoaika: {format(poistettavaLintu.aika, "HH:mm")}
			</Typography>

			<Button
				type="submit"
				variant="contained"
				color="secondary"
				style={{ marginBottom: 10, marginRight: 10 }}
			>
				Poista lintu
			</Button>

			<Button
				component={Link}
				to="/lintubongaus"
				variant="contained"
				color="default"
				style={{ marginBottom: 10, marginRight: 10 }}
			>
				Peruuta
			</Button>
		</form>
	);
}

export default PoistaLintu;
