import React from "react";
import SimpleMap from "./SimpleMap";
import DialogOpener from "./DialogOpener";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Typography } from "@mui/material";

const Contact = React.forwardRef((props, ref) => {
	return (
		<>
			<Box
				id="some"
				sx={{
					marginTop: "100px",
					textAlign: "center",
				}}
			>
				<Typography gutterBottom variant="h4">
					Contact:
				</Typography>{" "}
				<div id="contact" ref={ref}></div>
				<a href="mailto:ville.o.virtanen@icloud.com?subject=Yhteydenotto kotisivuilta">
					<EmailIcon sx={{ color: "primary.main", fontSize: 40 }} />
				</a>
				{/* <a href="https://www.instagram.com/villeovirtanen/">
					<InstagramIcon sx={{ color: "primary.main", fontSize: 40 }} />
				</a> */}
				<a href="https://www.facebook.com/ville.o.virtanen/">
					<FacebookIcon
						sx={{ color: "primary.main", fontSize: 40 }}
					/>
				</a>
				<a href="https://www.linkedin.com/in/villeovirtanen/">
					<LinkedInIcon
						sx={{ color: "primary.main", fontSize: 40 }}
					/>
				</a>
				<a href="https://github.com/cvivi007xamk">
					<GitHubIcon sx={{ color: "primary.main", fontSize: 40 }} />
				</a>
				<DialogOpener />
			</Box>

			<Box
				sx={{
					marginTop: "100px",
					textAlign: "center",
				}}
			>
				<Typography gutterBottom variant="h4">
					Address:
				</Typography>
				<SimpleMap
					lat={61.34419}
					lng={22.90737}
					address={"Koskikatu 1A11 38200 Sastamala"}
				/>
			</Box>
		</>
	);
});

export default Contact;
