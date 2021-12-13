import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@mui/material";

function Navigation(props) {
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
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
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="inherit"
				centered
			>
				<Tab component={Link} to="" label="Nykyinen säätila" />
				<Tab component={Link} to="ennuste" label="Ennuste" />
			</Tabs>
		</AppBar>
	);
}

export default Navigation;
