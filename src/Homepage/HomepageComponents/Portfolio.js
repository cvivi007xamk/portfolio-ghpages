import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import bitcoinPic from "../../Assets/bitcoin.svg";
// import cabinPic from "../../Assets/color-log-cabin.svg";
import weatherPic from "../../Assets/weather.svg";
import sportPic from "../../Assets/sport.svg";
// import fishingPic from "../../Assets/fishing.svg";
// import tshirtPic from "../../Assets/tshirt.svg";
import { Link } from "react-router-dom";

const Portfolio = React.forwardRef((props, ref) => {
	return (
		<>
			<Typography
				id="portfolio"
				gutterBottom
				variant="h4"
				sx={{ textAlign: "center", marginTop: "100px" }}
			>
				Portfolio:
			</Typography>{" "}
			<div id="portfolio" ref={ref}></div>
			<Box
				sx={{
					marginBottom: "100px",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					"& > :not(style)": {
						m: 1,
						width: "280px",
						height: "440px",
					},
				}}
			>
				<Card sx={{ maxWidth: 345, padding: 1 }}>
					<CardMedia
						component="img"
						height="280"
						image={bitcoinPic}
						alt="bitcoin"
					/>
					<CardContent>
						<Typography gutterBottom variant="h7" component="div">
							Bitcoin Timemachine
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Check best days to buy and sell on a given date
							range.
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							size="small"
							component={Link}
							to="/bitcoin"
							variant="contained"
						>
							Check it out
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ maxWidth: 345, padding: 1 }}>
					<CardMedia
						component="img"
						height="280"
						image={weatherPic}
						alt="weather"
					/>
					<CardContent>
						<Typography gutterBottom variant="h7" component="div">
							Weather Forecast
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Check the weather of a location.
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							size="small"
							component={Link}
							to="/weather"
							variant="contained"
						>
							Check it out
						</Button>
					</CardActions>
				</Card>
				<Card sx={{ maxWidth: 345, padding: 1 }}>
					<CardMedia
						component="img"
						height="280"
						image={sportPic}
						alt="sport"
					/>
					<CardContent>
						<Typography gutterBottom variant="h7" component="div">
							Workout Journal{" "}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							An app to log your daily workouts.
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							size="small"
							component={Link}
							to="/workouts"
							variant="contained"
						>
							Check it out
						</Button>
					</CardActions>
				</Card>
				{/* <Card sx={{ maxWidth: 345, padding: 1 }}>
					<CardMedia
						component="img"
						height="280"
						image={fishingPic}
						alt="fishing"
					/>
					<CardContent>
						<Typography gutterBottom variant="h7" component="div">
							Ice Fishing Enrollment
						</Typography>
						<Typography variant="body2" color="text.secondary">
							A quick page to enroll to an ice fishing tournament.
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							size="small"
							component={Link}
							to="/fishing"
							variant="contained"
						>
							Check it out
						</Button>
					</CardActions>
				</Card>
				<Card sx={{ maxWidth: 345, padding: 1 }}>
					<CardMedia
						component="img"
						height="280"
						image={cabinPic}
						alt="cabin"
					/>
					<CardContent>
						<Typography gutterBottom variant="h7" component="div">
							Cabin Rental App{" "}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Just a page to show different input types.
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							size="small"
							component={Link}
							to="/cabin"
							variant="contained"
						>
							Check it out
						</Button>
					</CardActions>
				</Card>
				<Card sx={{ maxWidth: 345, padding: 1 }}>
					<CardMedia
						component="img"
						height="280"
						image={tshirtPic}
						alt="t-shirt"
					/>
					<CardContent>
						<Typography gutterBottom variant="h7" component="div">
							T-Shirt Webstore Front{" "}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							A webstore front mockup for a T-shirt store.
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							size="small"
							component={Link}
							to="/tshirt"
							variant="contained"
						>
							Check it out
						</Button>
					</CardActions>
				</Card> */}
			</Box>
		</>
	);
});
export default Portfolio;
