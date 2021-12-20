import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import omakuva from "../../Assets/omakuva_small.png";
import { Box, Typography } from "@mui/material";

const Introduction = React.forwardRef((props, ref) => {
	return (
		<>
			<div style={{ height: "1px" }} id="introduction" ref={ref}>
				{" "}
			</div>

			<Box
				sx={{
					marginTop: "20vh",
					display: { sm: "flex" },
				}}
			>
				<Box
					sx={{
						maxWidth: "550px",
					}}
				>
					<Typography variant="h3" gutterBottom>
						Hello! My name is
					</Typography>
					<Typography
						variant="h2"
						color="text.secondary"
						gutterBottom
						sx={{
							fontFamily:
								"Garamond, Georgia, Baskerville, Caslon, 'Times New Roman',  serif",
							fontWeight: "bold",
						}}
					>
						Ville Virtanen
					</Typography>

					<Typography variant="h5" gutterBottom>
						I'm a beginner software developer from Sastamala,
						Finland.
					</Typography>
					<br />
					<Typography gutterBottom>
						Welcome to my pages where you can get to know more about
						me and the stuff I've made. Scroll down to see more..
					</Typography>
				</Box>

				<Box
					sx={{
						display: "box",
						height: "250px",
						width: "250px",
						overflow: "hidden",
						borderRadius: "160px",
						borderStyle: "solid",
						borderWidth: "2px",
						borderColor: "primary.main",
						textAlign: "center",
						backgroundColor: "primary.main",
						margin: "auto",

						marginTop: { xs: "30px", sm: "auto" },
						marginLeft: { sm: "auto" },
					}}
				>
					<span
						style={{
							textAlign: "center",
							marginLeft: "-100%",
							marginRight: "-100%",
						}}
					>
						<img
							src={omakuva}
							alt="Ville Virtanen"
							style={{ width: "250px" }}
						/>
					</span>
				</Box>
			</Box>
			<Box
				sx={{
					textAlign: "center",
					color: "primary.main",
					fontSize: 40,
				}}
			>
				<ArrowDownwardIcon
					sx={{
						marginTop: "20px",
						color: "primary.main",
						fontSize: 80,
					}}
				/>
			</Box>
		</>
	);
});

export default Introduction;
