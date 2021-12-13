import React from "react";
import { useState } from "react";

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
import educationPic from "../../Assets/education.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

export default function Education() {
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<Typography
				gutterBottom
				variant="h4"
				sx={{ textAlign: "center", marginTop: "100px" }}
			>
				Education:
			</Typography>
			<Card sx={{ maxWidth: 700, margin: "auto" }}>
				<CardHeader
					sx={{ color: "primary.main" }}
					avatar={
						<Avatar
							sx={{ bgcolor: "text.secondary" }}
							aria-label="edu"
						>
							EDU
						</Avatar>
					}
					title="Education"
					subheader="My official studies - so far"
				/>
				<CardMedia
					component="img"
					height="264"
					image={educationPic}
					alt="Studies"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						I am always learning and hungry for new skills. These
						are the official studies that I have completed and
						currently enrolled to. Besides these I am an avid reader
						(of non-fiction and fiction alike) and like to learn new
						stuff and keep up to date with the things going around
						me.
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
							Bachelor of Business Administration (BBA),
							Information technology | 09/2020 -
						</Typography>

						<Typography variant="h6">
							South-Eastern Finland University of Applied Sciences
							- Xamk
						</Typography>
						<Typography
							paragraph
							color="text.secondary"
							sx={{ marginBottom: "60px" }}
						>
							I'm currently studying to be a software developer at
							XAMK. The studies include mainly developing
							different software with a vast collection of
							techniques and languages (like JavaScript, React,
							Python, Kotlin, SQL, Node.js, Unity etc.). Besides
							these the studies include graphical design and
							production skills and business skills.
						</Typography>
						<Typography variant="h5" paragraph color="primary.main">
							Master of Philosophy (MPhil) | 09/2007 - 06/2013
						</Typography>
						<Typography variant="h6">
							University of Tampere
						</Typography>
						<Typography
							paragraph
							color="text.secondary"
							sx={{ marginBottom: "60px" }}
						>
							I majored in Philosophy in which I completed my Pro
							Gradu - dissertation and advanced studies with the
							grade excellent (5). I minored in Mathematics in
							which I completed 70 ETCS with the grade excellent
							(5).
						</Typography>
						<Typography variant="h5" paragraph color="primary.main">
							Finnish Matriculation Examination | 2003 - 2006
						</Typography>
						<Typography variant="h6">
							Vammala Upper Secondary School
						</Typography>
						<Typography
							paragraph
							color="text.secondary"
							sx={{ marginBottom: "60px" }}
						>
							The Finnish Matriculation Examination
							(Ylioppilastutkinto) was done in Vammalan lukio in
							2006
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</>
	);
}
