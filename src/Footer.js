import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = (props) => {
	var currentYear = new Date().getFullYear();
	return (
		<Box
			sx={{
				maxWidth: 960,
				margin: "auto",
				marginTop: "80px",

				paddingLeft: 4,
				paddingRight: 4,
			}}
		>
			<footer>
				<Typography align="center">
					Copyright &copy; Ville Virtanen {currentYear}
				</Typography>
				<address align="center">
					ville.o.virtanen@icloud.com <br />
					044 342 5088
				</address>
			</footer>
		</Box>
	);
};

export default Footer;
