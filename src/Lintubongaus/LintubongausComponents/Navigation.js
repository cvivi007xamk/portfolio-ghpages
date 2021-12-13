import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, CssBaseline, Tabs, Tab } from "@mui/material";

function Navigation(props) {
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<CssBaseline>
			<AppBar position="sticky">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="secondary"
					textColor="inherit"
					centered
				>
					<Tab component={Link} to="" label="Kaikki linnut" />
					<Tab component={Link} to="lisaalintu" label="Lisää lintu" />
				</Tabs>
			</AppBar>
		</CssBaseline>
	);
}

export default Navigation;
