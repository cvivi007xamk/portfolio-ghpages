import React from "react";
import { useState } from "react";

import { Link as RouterLink } from "react-router-dom";
import {
	Tabs,
	Tab,
	Box,
	Link,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

const Navigationbar = (props) => {
	const handleChange = (event, newValue) => {
		props.setTabValue(newValue);
	};
	const [drawer, setDrawer] = useState(false);
	const handleDrawerOpen = () => {
		setDrawer(true);
	};

	const handleDrawerClose = () => {
		setDrawer(false);
	};

	return (
		<Box
			sx={{
				position: "sticky",
				top: 0,
				height: "3em",
				backgroundColor: "secondary.main",
				zIndex: 3,
			}}
		>
			<Box
				sx={{
					display: "flex",
					maxWidth: "lg",
					margin: "auto",
					paddingLeft: 2,
					paddingRight: 2,
				}}
				className="header"
			>
				<Link component={RouterLink} to="/">
					<CodeIcon sx={{ fontSize: "3em", color: "primary.main" }} />
				</Link>

				<Tabs
					sx={{
						marginLeft: "auto",
						backgroundColor: "secondary.main",
						height: "3em",
						display: { xs: "none", sm: "flex" },
					}}
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
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					sx={{
						marginLeft: "auto",
						display: { sm: "none" },
					}}
				>
					<MenuIcon />
				</IconButton>
				<IconButton
					sx={{
						height: "2em",
						marginLeft: "auto",
						display: { xs: "none", sm: "flex" },
					}}
					onClick={props.toggleTheme}
					color="inherit"
				>
					{props.light ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>
				<Drawer
					sx={{
						flexShrink: 0,
						display: { sm: "none" },
					}}
					variant="persistent"
					anchor="right"
					open={drawer}
				>
					<ListItem>
						<IconButton
							sx={{ justifyContent: "flex-start" }}
							onClick={handleDrawerClose}
						>
							<ChevronRightIcon />
						</IconButton>
						<IconButton
							sx={{
								marginLeft: "auto",
							}}
							onClick={props.toggleTheme}
							color="inherit"
						>
							{props.light ? (
								<Brightness7Icon />
							) : (
								<Brightness4Icon />
							)}
						</IconButton>
					</ListItem>
					<Divider />
					<List>
						<ListItem
							button
							key="Home"
							component={RouterLink}
							to="/"
							onClick={props.executeScrollIntroduction}
						>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItem>
						<ListItem
							button
							key="About Me"
							component={RouterLink}
							to="/"
							onClick={props.executeScrollAbout}
						>
							<ListItemIcon>
								<InfoIcon />
							</ListItemIcon>
							<ListItemText primary="About Me" />
						</ListItem>
						<ListItem
							button
							key="Contact"
							component={RouterLink}
							to="/"
							onClick={props.executeScrollContact}
						>
							<ListItemIcon>
								<ContactMailIcon />
							</ListItemIcon>
							<ListItemText primary="Contact" />
						</ListItem>
						<ListItem
							button
							key="Resume"
							component={RouterLink}
							to="/"
							onClick={props.executeScrollResume}
						>
							<ListItemIcon>
								<SchoolIcon />
							</ListItemIcon>
							<ListItemText primary="Resume" />
						</ListItem>
						<ListItem
							button
							key="Portfolio"
							component={RouterLink}
							to="/"
							onClick={props.executeScrollPortfolio}
						>
							<ListItemIcon>
								<WorkIcon />
							</ListItemIcon>
							<ListItemText primary="Portfolio" />
						</ListItem>
					</List>
				</Drawer>
			</Box>
		</Box>
	);
};

export default Navigationbar;
