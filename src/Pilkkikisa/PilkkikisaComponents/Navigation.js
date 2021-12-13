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
		<>
			<AppBar position="sticky">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="secondary"
					textColor="inherit"
					centered
				>
					<Tab component={Link} to="" label="Etusivu" />
					<Tab component={Link} to="saannot" label="Säännöt" />
					<Tab
						component={Link}
						to="ilmoittautuminen"
						label="Ilmoittautuminen"
					/>
				</Tabs>
			</AppBar>
		</>
	);
}

export default Navigation;
