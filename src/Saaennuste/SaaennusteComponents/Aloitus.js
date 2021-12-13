import React from "react";
import { TextField, Typography, Button } from "@mui/material";

import { format } from "date-fns";

function Aloitus(props) {
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

	return (
		<>
			<Typography sx={{ marginTop: "50px" }} align="center" variant="h2">
				Säätiedot
			</Typography>
			<Typography align="center" variant="h4">
				{props.saatilanne.name} <br />
			</Typography>
			<Typography align="center" variant="h6">
				{format(new Date(), "d.M.y 'klo' HH:mm")}
			</Typography>

			<TextField
				sx={{ marginTop: "50px" }}
				variant="outlined"
				label="Syötä kaupunki"
				onChange={(event) => {
					props.setKaupunki(aakkoset(event.target.value));
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

			<img
				style={{
					display: "block",
					margin: "auto",
					marginTop: "10px",
					marginBottom: "10px",
				}}
				src={`http://openweathermap.org/img/wn/${props.saatilanne.weather[0].icon}@2x.png`}
				alt="Sääikoni"
			/>
			<Typography variant="h6" align="center">
				Sääkuvaus:{" "}
				{props.saatilanne.weather[0].description[0].toUpperCase() +
					props.saatilanne.weather[0].description.substring(1)}
				<br />
				Lämpötila: {props.saatilanne.main.temp} &#8451; <br />
				Tuntuu kuin: {props.saatilanne.main.feels_like} &#8451;
				<br />
				Tuuli: {props.saatilanne.wind.speed} m/s
				<br />
				Kosteus: {props.saatilanne.main.humidity} %
				<br />
				Näkyvyys: {props.saatilanne.visibility} metriä
				<br />
				Kosteus: {props.saatilanne.main.humidity} %
				<br />
				Auringonnousu:{" "}
				{format(
					new Date(props.saatilanne.sys.sunrise * 1000),
					"'klo' HH:mm"
				)}{" "}
				(GMT +2)
				<br />
				Auringonlasku:{" "}
				{format(
					new Date(props.saatilanne.sys.sunset * 1000),
					"'klo' HH:mm"
				)}{" "}
				(GMT +2)
			</Typography>
		</>
	);
}

export default Aloitus;
