import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import careerPic from "../../Assets/career.jpeg";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState } from "react";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const Resume = React.forwardRef((props, ref) => {
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<Typography
				id="resume"
				gutterBottom
				variant="h4"
				sx={{ textAlign: "center", marginTop: "100px" }}
			>
				Career:
			</Typography>{" "}
			<div id="resume" ref={ref}></div>
			<Card sx={{ maxWidth: 700, margin: "auto" }}>
				<CardHeader
					sx={{ color: "primary.main" }}
					avatar={
						<Avatar
							sx={{ bgcolor: "text.secondary" }}
							aria-label="work"
						>
							CV
						</Avatar>
					}
					title="Work History"
					subheader="The jobs I've had"
				/>
				<CardMedia
					component="img"
					height="264"
					image={careerPic}
					alt="Work history"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						I am in the process of looking for a job, where I can
						evolve as a software developer and conclude my ongoing
						software developer studies at the same time. I am
						currently employed in the workplace development and
						furniture industry but thinking of finding new
						challenges and goals in the technology industry. Here
						you will find my recent work history.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon
							sx={{ color: "primary.main", fontSize: 40 }}
						/>
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography variant="h5" paragraph color="primary.main">
							Martela Oyj - Key Account Manager, 04/2021 -
						</Typography>
						<Typography
							paragraph
							color="text.secondary"
							sx={{ marginBottom: "60px" }}
						>
							Added responsibilities that came with the Key
							Account Manager role were the management and
							development of nationally significant customers.
							Besides these added responsibilities the previously
							had customers and duties stayed the same.
						</Typography>
						<Typography variant="h5" paragraph color="primary.main">
							Martela Oyj - Account Manager, 04/2018 - 04/2021
						</Typography>
						<Typography
							paragraph
							color="text.secondary"
							sx={{ marginBottom: "60px" }}
						>
							As an Account Manager my job description was the
							comprehensive management and need-based solution
							selling for named customers. Also prospecting for
							new customers and developing those relationships to
							long lasting partnerships was a part of the role. My
							responsibilities included the commercial customers
							of Pirkanmaa area and the sales of the full Martela
							services and products portfolio.
						</Typography>
						<Typography variant="h5" paragraph color="primary.main">
							Muuttopalvelu Grundell Oy - Removals Coordinator,
							01/2017 - 04/2018
						</Typography>
						<Typography
							paragraph
							color="text.secondary"
							sx={{ marginBottom: "60px" }}
						>
							As a Removals Coordinator I was responsible for the
							services and furniture installations in the
							Pirkanmaa and Kanta-Häme area. I coordinated,
							supervised and did quality control for removals and
							furniture installation projects. I also acted as a
							superior to the moving staff. As a supervisor the
							rsponsibilities associated with that role also were
							part of the job (like hour approvals, performance
							appraisals etc.).
						</Typography>
						<Typography variant="h5" paragraph color="primary.main">
							Muuttopalvelu Grundell Oy - Account Manager, 02/2014
							- 12/2016
						</Typography>
						<Typography
							paragraph
							color="text.secondary"
							sx={{ marginBottom: "60px" }}
						>
							In this Account Manager role I handled the sales of
							removals services to Muuttopalvelu Grundell
							commercial customers. The responsibilities also
							included the supervision and billing of said
							services. I also acted as a supervisor to the
							removals service staff.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</>
	);
});
export default Resume;
