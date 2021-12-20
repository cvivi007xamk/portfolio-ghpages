import React from "react";
import { useState } from "react";
import useScrollPosition from "@react-hook/window-scroll";

import { Box, Typography, Zoom } from "@mui/material";

const AboutMe = React.forwardRef((props, ref) => {
	const [checked2, setChecked2] = useState(false);
	const [checked1, setChecked1] = useState(false);

	const scrollPosition = useScrollPosition(30);
	if (checked2 === false && scrollPosition >= 1200) {
		setChecked2(true);
	}
	if (checked1 === false && scrollPosition >= 20) {
		setChecked1(true);
	}

	return (
		<>
			<Box
				sx={{
					marginTop: "30vh",
				}}
			>
				<Zoom in={checked1}>
					<Box>
						<Typography
							variant="h4"
							gutterBottom
							sx={{
								textAlign: "center",
							}}
						>
							About me:
						</Typography>
						<div id="aboutme" ref={ref}></div>
						<br />
						<Typography gutterBottom>
							I'm currently a sophomore in the South-Eastern
							Finland University of Applied Sciences (XAMK)
							studying to become a software developer.
						</Typography>
						<br />
						<Typography gutterBottom>
							Programming has been my passion for a while and I
							really like solving problems with code. I especially
							like the analytical and mathematical approach that
							coding brings to the table when faced with practical
							challenges.
						</Typography>
						<br />
						<Typography gutterBottom>
							At the moment I'm really into web and mobile
							development but I do like to dabble with Python and
							a little bit of data science too. Most of my coding
							is done using JavaScript and Python (and of course
							the necessary HTML/CSS too).
						</Typography>
						<br /> <br />
						<Typography
							variant="h5"
							sx={{
								display: "inline",
								fontWeight: "bold",
							}}
						>
							On my{" "}
						</Typography>
						<Typography
							variant="h5"
							sx={{
								color: "primary.main",
								display: "inline",
								fontWeight: "bold",
							}}
						>
							FREE{" "}
						</Typography>
						<Typography
							variant="h5"
							sx={{
								display: "inline",
								fontWeight: "bold",
							}}
						>
							time I like to:
						</Typography>
						<Zoom in={checked1}>
							<Box
								sx={{
									marginTop: "10px",
								}}
							>
								<Typography
									sx={{
										display: "inline",
									}}
								>
									Do{" "}
								</Typography>
								<Typography
									sx={{
										color: "primary.main",
										display: "inline",
									}}
								>
									PHOTOGRAPHY{" "}
								</Typography>
								<Typography
									sx={{
										display: "inline",
									}}
								>
									(mostly landscape and cityscape)
								</Typography>
							</Box>
						</Zoom>
						<Zoom
							in={checked1}
							style={{
								transitionDelay: checked1 ? "2000ms" : "0ms",
							}}
						>
							<Box
								sx={{
									marginTop: "10px",
								}}
							>
								<Typography
									sx={{
										display: "inline",
									}}
								>
									Read and listen to{" "}
								</Typography>
								<Typography
									sx={{
										color: "primary.main",
										display: "inline",
									}}
								>
									BOOKS{" "}
								</Typography>
								<Typography
									sx={{
										display: "inline",
									}}
								>
									(mostly non-fiction but I do like to relax
									with fiction too)
								</Typography>
							</Box>
						</Zoom>
						<Zoom
							in={checked1}
							style={{
								transitionDelay: checked1 ? "4000ms" : "0ms",
							}}
						>
							<Box
								sx={{
									marginTop: "10px",
								}}
							>
								<Typography
									sx={{
										display: "inline",
									}}
								>
									Train{" "}
								</Typography>
								<Typography
									sx={{
										color: "primary.main",
										display: "inline",
									}}
								>
									BODYCOMBAT{" "}
								</Typography>
								<Typography
									sx={{
										display: "inline",
									}}
								>
									(I also do Bodypump but the beats are sicker
									in Bodycombat)
								</Typography>
							</Box>
						</Zoom>
						<Zoom
							in={checked1}
							style={{
								transitionDelay: checked1 ? "6000ms" : "0ms",
							}}
						>
							<Box
								sx={{
									marginTop: "10px",
								}}
							>
								<Typography
									sx={{
										color: "primary.main",
										display: "inline",
									}}
								>
									TRAVEL{" "}
								</Typography>
								<Typography
									sx={{
										display: "inline",
									}}
								>
									(if the pandemic ever allows again)
								</Typography>
							</Box>
						</Zoom>
					</Box>
				</Zoom>
			</Box>
		</>
	);
});

export default AboutMe;
