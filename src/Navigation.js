import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Icon from "@mdi/react";
import {
	mdiFish,
	mdiBinoculars,
	mdiHomeGroup,
	mdiTshirtCrew,
	mdiBitcoin,
} from "@mdi/js";

function Navigation(props) {
	const [aukinainenSovellus, setAukinainenSovellus] = useState("");
	const [open, setOpen] = useState(false);
	const toggleDrawer = () => {
		setOpen((value) => !value);
	};
	const handleClick = (x) => {
		setAukinainenSovellus(x);
	};

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={toggleDrawer}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">
							Portfolio | {aukinainenSovellus}
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>

			<Drawer anchor="left" open={open} onClose={toggleDrawer}>
				<List
					style={{
						width: "300px",
						marginTop: "20px",
					}}
					onClick={toggleDrawer}
				>
					<ListItem
						onClick={() => {
							handleClick("Etusivu");
						}}
						button
						component={Link}
						to="/portfolio"
					>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Etusivu"></ListItemText>
					</ListItem>

					<ListItem
						onClick={() => {
							handleClick("Bitcoin");
						}}
						button
						component={Link}
						to="/bitcoin"
					>
						<ListItemIcon>
							<Icon path={mdiBitcoin} size={1} />
						</ListItemIcon>
						<ListItemText primary="Bitcoin"></ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							handleClick("Sääennuste");
						}}
						button
						component={Link}
						to="/saa"
					>
						<ListItemIcon>
							<WbSunnyIcon />
						</ListItemIcon>
						<ListItemText primary="Sääennuste"></ListItemText>
					</ListItem>

					<ListItem
						onClick={() => {
							handleClick("Lintubongaus");
						}}
						button
						component={Link}
						to="/lintubongaus"
					>
						<ListItemIcon>
							<Icon path={mdiBinoculars} size={1} />
						</ListItemIcon>
						<ListItemText primary="Lintubongaus"></ListItemText>
					</ListItem>

					<ListItem
						onClick={() => {
							handleClick("Aktiviteettiseuranta");
						}}
						button
						component={Link}
						to="/aktiviteetit"
					>
						<ListItemIcon>
							<SportsBasketballIcon />
						</ListItemIcon>
						<ListItemText primary="Aktiviteettiseuranta"></ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							handleClick("Pilkkikisa");
						}}
						button
						component={Link}
						to="/pilkkikisa"
					>
						<ListItemIcon>
							<Icon path={mdiFish} size={1} />
						</ListItemIcon>
						<ListItemText primary="Pilkkikisa"></ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							handleClick("Mökkivuokraus");
						}}
						button
						component={Link}
						to="/mokkivuokraus"
					>
						<ListItemIcon>
							<Icon path={mdiHomeGroup} size={1} />
						</ListItemIcon>
						<ListItemText primary="Mökkivuokraus"></ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							handleClick("Paitakauppa");
						}}
						button
						component={Link}
						to="/paitakauppa"
					>
						<ListItemIcon>
							<Icon path={mdiTshirtCrew} size={1} />
						</ListItemIcon>
						<ListItemText primary="Paitakauppa"></ListItemText>
					</ListItem>
				</List>
			</Drawer>
		</>
	);
}

export default Navigation;
