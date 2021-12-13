import React from "react";
import {
	TextField,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
} from "@mui/material";
import Button from "@mui/material/Button";

import { format } from "date-fns";

function Ennuste(props) {
	const aakkoset = (string) => {
		return string
			.split("")
			.map(
				function (letter) {
					let i = this.accents.indexOf(letter);
					return i !== -1 ? this.out[i] : letter;
				}.bind({
					accents:
						"ÀÁÂÃÄÅĄàáâãäåąßÒÓÔÕÕÖØÓòóôõöøóÈÉÊËĘèéêëęðÇĆçćÐÌÍÎÏìíîïÙÚÛÜùúûüÑŃñńŠŚšśŸÿýŽŻŹžżź",
					out: "AAAAAAAaaaaaaaBOOOOOOOOoooooooEEEEEeeeeeeCCccDIIIIiiiiUUUUuuuuNNnnSSssYyyZZZzzz",
				})
			)
			.join("");
	};

	let saaennusteApu = props.saaennuste.list.filter((aika) => {
		return (
			aika.dt_txt.includes("03:00:00") || aika.dt_txt.includes("15:00:00")
		);
	});

	return (
		<>
			<Typography sx={{ marginTop: "50px" }} align="center" variant="h2">
				Sääennuste
			</Typography>
			<Typography align="center" variant="h4">
				{props.saaennuste.city.name}
			</Typography>
			<TextField
				sx={{ marginTop: "50px" }}
				variant="outlined"
				label="Vaihda kaupunki"
				onChange={(event) => {
					props.setKaupunki(aakkoset(event.target.value));
					console.log(props.kaupunki);
				}}
				fullWidth
				error={Boolean(props.kaupunkiVirhe)}
				helperText={props.kaupunkiVirhe}
			/>
			<Button
				sx={{ marginTop: "20px" }}
				type="submit"
				variant="contained"
				color="primary"
				size="large"
				fullWidth
				onClick={props.haeEnnusteJaTiedot}
			>
				Vaihda kaupunki
			</Button>

			<br />

			<List>
				{saaennusteApu.map((aika, idx) => {
					return (
						<ListItem
							alignItems="center"
							key={idx}
							sx={{
								height: "120px",
							}}
						>
							<ListItemText
								sx={{
									marginRight: "40px",
								}}
								primary={format(
									new Date(aika.dt * 1000),
									"d.M.y HH:mm"
								)}
								secondary="Kellonaika GMT +2"
							/>
							<ListItemText
								sx={{ marginRight: "40px" }}
								primary={`${aika.main.temp} 	\u2103 `}
								secondary="Lämpötila"
							/>
							<ListItemText
								sx={{ marginRight: "40px" }}
								primary={
									aika.weather[0].description[0].toUpperCase() +
									aika.weather[0].description.substring(1)
								}
								secondary="Sääkuvaus"
							/>

							<ListItemIcon
								style={{
									marginRight: "40px",
								}}
							>
								<img
									style={{
										position: "absolute",
										top: "50%",
										width: "100px",
										height: "100px",
										marginTop: "-65px",
										marginRight: "50px",
									}}
									src={`http://openweathermap.org/img/wn/${aika.weather[0].icon}@2x.png`}
									alt="Sääikoni"
								/>
							</ListItemIcon>
						</ListItem>
					);
				})}
			</List>

			<br />
		</>
	);
}

export default Ennuste;
