import React from "react";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import BongatutLinnut from "./LintubongausComponents/BongatutLinnut";
import LisaaLintu from "./LintubongausComponents/LisaaLintu";
import MuokkaaLintua from "./LintubongausComponents/MuokkaaLintua";
import PoistaLintu from "./LintubongausComponents/PoistaLintu";
import Navigation from "./LintubongausComponents/Navigation";
import { Routes, Route } from "react-router-dom";

function LintubongausApp(props) {
	const [linnut, setLinnut] = useState([]);
	useEffect(() => {
		if (localStorage.getItem("lintubongauslista")) {
			setLinnut(JSON.parse(localStorage.getItem("lintubongauslista")));
		} else {
			setLinnut([]);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("lintubongauslista", JSON.stringify(linnut));
	}, [linnut]);

	return (
		<>
			<Navigation />

			<Container maxWidth="md">
				<Routes>
					<Route
						path=""
						element={<BongatutLinnut linnut={linnut} />}
					/>
					<Route
						path="lisaalintu"
						element={
							<LisaaLintu linnut={linnut} setLinnut={setLinnut} />
						}
					/>
					<Route
						path="poistalintu/:id"
						element={
							<PoistaLintu
								linnut={linnut}
								setLinnut={setLinnut}
							/>
						}
					/>
					<Route
						path="muokkaalintua/:id"
						element={
							<MuokkaaLintua
								linnut={linnut}
								setLinnut={setLinnut}
							/>
						}
					/>
				</Routes>
			</Container>
		</>
	);
}

export default LintubongausApp;
