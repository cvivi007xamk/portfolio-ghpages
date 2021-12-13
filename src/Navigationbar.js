import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Tabs, Tab, Box, Link } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import IconButton from "@mui/material/IconButton";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Navigationbar = (props) => {
	const handleChange = (event, newValue) => {
		props.setTabValue(newValue);
	};

	return (
		<Box
			sx={{
				position: "sticky",
				top: 0,
				height: 50,
				backgroundColor: "secondary.main",
				zIndex: 3,
			}}
		>
			<Box
				sx={{
					display: "flex",
					maxWidth: 960,
					margin: "auto",
					paddingLeft: 4,
					paddingRight: 4,
				}}
				className="header"
			>
				<Link component={RouterLink} to="/">
					<CodeIcon sx={{ fontSize: 44, color: "primary.main" }} />
				</Link>

				<Tabs
					sx={{ marginLeft: "auto" }}
					value={props.tabValue}
					onChange={handleChange}
					selectionFollowsFocus
				>
					<Tab
						component={RouterLink}
						to="/"
						onClick={props.executeScrollIntroduction}
						label="Home"
					/>
					<Tab
						component={RouterLink}
						to="/"
						onClick={props.executeScrollAbout}
						label="About Me"
					/>
					<Tab
						component={RouterLink}
						to="/"
						onClick={props.executeScrollContact}
						label="Contact"
					/>
					<Tab
						component={RouterLink}
						to="/"
						onClick={props.executeScrollResume}
						label="Resume"
					/>
					<Tab
						component={RouterLink}
						to="/"
						onClick={props.executeScrollPortfolio}
						label="Portfolio"
					/>
				</Tabs>
				<IconButton sx={{}} onClick={props.toggleTheme} color="inherit">
					{props.light ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>
			</Box>
		</Box>
	);
};

export default Navigationbar;
