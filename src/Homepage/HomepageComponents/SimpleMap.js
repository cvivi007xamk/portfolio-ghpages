import React from "react";

import GoogleMapReact from "google-map-react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { Box, Typography } from "@mui/material";

const LocationPin = ({ text }) => (
	<Box
		sx={{
			textAlign: "center",
		}}
	>
		<MyLocationIcon sx={{ color: "secondary.main", fontSize: 40 }} />
		<Typography
			color="secondary.main"
			sx={{ textAlign: "center", fontSize: 12, fontWeight: "bold" }}
		>
			{text}
		</Typography>
	</Box>
);

function SimpleMap(props) {
	const location = {
		address: props.address,
		lat: props.lat,
		lng: props.lng,
	};
	const center = { lat: props.lat, lng: props.lng };
	return (
		<Box
			sx={{
				height: "400px",
				width: "100%",
				zIndex: 0,
			}}
		>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyAPzD2NFBz61sJKICNTQM18aHsbiJiE-jU",
				}}
				defaultCenter={center}
				defaultZoom={13}
				yesIWantToUseGoogleMapApiInternals
			>
				<LocationPin
					lat={location.lat}
					lng={location.lng}
					text={location.address}
				/>
			</GoogleMapReact>
		</Box>
	);
}

export default SimpleMap;
