import React from "react";
import { useState } from "react";
import Saannot from "./PilkkikisaComponents/Saannot";
import Pilkkialoitus from "./PilkkikisaComponents/Pilkkialoitus";
import Kiitos from "./PilkkikisaComponents/Kiitos";
import Ilmoittautuminen from "./PilkkikisaComponents/Ilmoittautuminen";
import Navigation from "./PilkkikisaComponents/Navigation";
import { Routes, Route } from "react-router-dom";

function PilkkikisaApp() {
	const [lomaketiedot, setLomaketiedot] = useState({});
	const tuoTiedot = (x) => {
		setLomaketiedot(x);
	};
	return (
		<>
			<Navigation />

			<Routes>
				<Route path="" element={<Pilkkialoitus />} />
				<Route path="saannot" element={<Saannot />} />
				<Route
					path="ilmoittautuminen"
					element={<Ilmoittautuminen vieTiedot={tuoTiedot} />}
				/>
				<Route
					path="kiitos"
					element={<Kiitos lomaketiedotApu={lomaketiedot} />}
				/>
			</Routes>
		</>
	);
}

export default PilkkikisaApp;
