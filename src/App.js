import React from "react";
import { useRef } from "react";
import { useState } from "react";

import LintubongausApp from "./Lintubongaus/LintubongausApp";
import SaaennusteApp from "./Saaennuste/SaaennusteApp";
import AktiviteettiseurantaApp from "./Aktiviteettiseuranta/AktiviteettiseurantaApp";
import Homepage from "./Homepage/Homepage";
import PilkkikisaApp from "./Pilkkikisa/PilkkikisaApp";
import MokkivuokrausApp from "./Mokkivuokraus/MokkivuokrausApp";
import PaitakauppaApp from "./Paitakauppa/PaitakauppaApp";
import BitcoinApp from "./Bitcoin/BitcoinApp";
import Footer from "./Footer";
import Navigationbar from "./Navigationbar";

import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
//const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const themeLight = createTheme({
	mode: "light",

	palette: {
		background: {
			paper: "#dbe5e0",
			default: "#fff",
		},
		text: {
			primary: "#002019",
			secondary: "#004d40",
		},
		primary: {
			light: "#417573",
			main: "#00675b",
			dark: "#00251a",
			contrastText: "#fff",
		},
		secondary: {
			light: "#e5ffff",
			main: "#b2dfdb",
			dark: "#82ada9",
			contrastText: "#000000",
		},
	},

	typography: {
		fontFamily: [
			"menlo",
			"fira code",
			"jetbrains mono",
			"Lucida Console",
			"Courier",
			"monospace",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

const themeDark = createTheme({
	palette: {
		mode: "dark",

		background: {
			paper: "#182734",
			default: "#0F1828",
		},
		text: {
			primary: "#7F88A4",
			secondary: "#C6D1F2",
		},
		primary: {
			light: "##AFFBE9",
			main: "#81F9D7",
			dark: "#417573",
			contrastText: "#000000",
		},
		secondary: {
			light: "##428e92",
			main: "#132037",
			dark: "#000000",
			contrastText: "##fff",
		},
	},

	typography: {
		fontFamily: [
			"menlo",
			"fira code",
			"jetbrains mono",
			"Lucida Console",
			"Courier",
			"monospace",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

const App = React.forwardRef((props, ref) => {
	const refObj = {
		resumeRef: useRef(),
		introductionRef: useRef(),
		aboutRef: useRef(),
		contactRef: useRef(),
		portfolioRef: useRef(),
	};

	//const light = false;
	//Make a theme changing button
	const [light, setLight] = useState(false);
	const toggleTheme = () => setLight(!light);
	const [tabValue, setTabValue] = useState(0);

	var observer = new IntersectionObserver(
		function (entries) {
			if (entries[0].isIntersecting === true) {
				console.log(entries[0].target.id);
				if (entries[0].target.id === "introduction") {
					setTabValue(0);
				}
				if (entries[0].target.id === "aboutme") {
					setTabValue(1);
				}
				if (entries[0].target.id === "contact") {
					setTabValue(2);
				}
				if (entries[0].target.id === "resume") {
					setTabValue(3);
				}
				if (entries[0].target.id === "portfolio") {
					setTabValue(4);
				}
			}
		},
		{ threshold: [1] }
	);

	document.addEventListener("DOMContentLoaded", (event) => {
		observer.observe(document.querySelector("#introduction"));
		observer.observe(document.querySelector("#aboutme"));
		observer.observe(document.querySelector("#contact"));
		observer.observe(document.querySelector("#resume"));
		observer.observe(document.querySelector("#portfolio"));
	});

	const scrollToRef = (ref) =>
		window.scrollTo(0, ref.current.offsetTop - 120);
	const executeScrollResume = () => scrollToRef(refObj.resumeRef);
	const executeScrollIntroduction = () => scrollToRef(refObj.introductionRef);
	const executeScrollAbout = () => scrollToRef(refObj.aboutRef);
	const executeScrollContact = () => scrollToRef(refObj.contactRef);
	const executeScrollPortfolio = () => scrollToRef(refObj.portfolioRef);

	return (
		<React.Fragment>
			<ThemeProvider theme={light ? themeLight : themeDark}>
				<CssBaseline />

				<Navigationbar
					toggleTheme={toggleTheme}
					light={light}
					refObj={refObj}
					tabValue={tabValue}
					setTabValue={setTabValue}
					executeScrollResume={executeScrollResume}
					executeScrollIntroduction={executeScrollIntroduction}
					executeScrollAbout={executeScrollAbout}
					executeScrollContact={executeScrollContact}
					executeScrollPortfolio={executeScrollPortfolio}
				/>

				<Box
					sx={{
						maxWidth: 960,
						margin: "auto",
						paddingLeft: 2,
						paddingRight: 2,
						minHeight: "calc(100vh - 170px)",
						marginBottom: "-50px",
					}}
				>
					<Routes>
						<Route path="/" element={<Homepage ref={refObj} />} />

						<Route path="/bitcoin/*" element={<BitcoinApp />} />

						<Route path="/weather/*" element={<SaaennusteApp />} />

						<Route
							path="/lintubongaus/*"
							element={<LintubongausApp />}
						/>

						<Route
							path="/workouts/*"
							element={<AktiviteettiseurantaApp />}
						/>
						<Route path="/fishing/*" element={<PilkkikisaApp />} />
						<Route path="/cabin/*" element={<MokkivuokrausApp />} />
						<Route path="/tshirt/*" element={<PaitakauppaApp />} />
					</Routes>
				</Box>
				<div className="push"></div>
				<Footer className="footer" />
			</ThemeProvider>
		</React.Fragment>
	);
});

export default App;
