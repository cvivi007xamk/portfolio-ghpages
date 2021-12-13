import React from "react";
//import BitcoinNavigation from "./BitcoinComponents/BitcoinNavigation";
import Home from "./BitcoinComponents/Home";
// import About from "./BitcoinComponents/About";
// import CoinPrices from "./BitcoinComponents/CoinPrices";
// import Wallet from "./BitcoinComponents/Wallet";
// import { Routes, Route } from "react-router-dom";

const BitcoinApp = () => {
	return (
		<>
			<Home />
			{/* <BitcoinNavigation /> */}
			{/* <Routes>
				<Route path="" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="wallet" element={<Wallet />} />
				<Route path="prices" element={<CoinPrices />} />
			</Routes> */}
		</>
	);
};

export default BitcoinApp;
