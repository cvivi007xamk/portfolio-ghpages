import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@mui/material";

function Navigation(props) {
	const handleChange = (event, newValue) => {
		props.setSportTabValue(newValue);
	};

	return (
		<AppBar
			sx={{
				position: "sticky",
				top: 0,
				height: 50,
				backgroundColor: "background.default",

				zIndex: 1,
			}}
		>
			<Tabs
				value={props.sportTabValue}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="inherit"
				centered
			>
				<Tab component={Link} to="" label="Summary" />
				<Tab component={Link} to="allworkouts" label="All workouts" />
				<Tab component={Link} to="addworkout" label="Add workout" />
			</Tabs>
		</AppBar>
	);
}

export default Navigation;
