import React from "react";
import { useState } from "react";
import VerkkokauppaHeader from "./PaitakauppaComponents/VerkkokauppaHeader";
import VerkkokauppaFooter from "./PaitakauppaComponents/VerkkokauppaFooter";
import Tuotenostot from "./PaitakauppaComponents/Tuotenostot";
import Kirjautuminen from "./PaitakauppaComponents/Kirjautuminen";
import Pikaostoskori from "./PaitakauppaComponents/Pikaostoskori";
import VerkkokauppaSivu from "./PaitakauppaComponents/VerkkokauppaSivu";

import tPaitaKuva1 from "./paitakuvat/tpaita1.webp";
import tPaitaKuva2 from "./paitakuvat/tpaita2.webp";
import tPaitaKuva3 from "./paitakuvat/tpaita3.webp";
import tPaitaKuva4 from "./paitakuvat/tpaita4.webp";
import tPaitaKuva5 from "./paitakuvat/tpaita5.jpg";
import tPaitaKuva6 from "./paitakuvat/tpaita6.jpg";
import Tuotelokero from "./PaitakauppaComponents/Tuotelokero.js";

function PaitakauppaApp() {
	const [kirjautunut, setKirjautunut] = useState(false);
	const [tuotemaara, setTuotemaara] = useState(0);

	const [yhteissumma, setYhteissumma] = useState(0);
	const lisaaKoriin = (hinta) => {
		setYhteissumma(yhteissumma + hinta);
		setTuotemaara(tuotemaara + 1);
	};
	const kirjauduSisaan = () => {
		setKirjautunut(true);
	};
	const kirjauduUlos = () => {
		setKirjautunut(false);
	};

	return (
		<VerkkokauppaSivu>
			<VerkkokauppaHeader>T-PAITA KAUPPA</VerkkokauppaHeader>
			<Tuotenostot>
				<Tuotelokero
					tuotekuva={tPaitaKuva1}
					tuotenimi="monalisa"
					tuotehinta={240}
					lisaaKoriin={lisaaKoriin}
					kirjautunut={kirjautunut}
				></Tuotelokero>
				<Tuotelokero
					tuotekuva={tPaitaKuva2}
					tuotenimi="marker"
					tuotehinta={250}
					lisaaKoriin={lisaaKoriin}
					kirjautunut={kirjautunut}
				></Tuotelokero>
				<Tuotelokero
					tuotekuva={tPaitaKuva3}
					tuotenimi="cut here"
					tuotehinta={200}
					lisaaKoriin={lisaaKoriin}
					kirjautunut={kirjautunut}
				></Tuotelokero>
				<Tuotelokero
					tuotekuva={tPaitaKuva4}
					tuotenimi="marker white"
					tuotehinta={210}
					lisaaKoriin={lisaaKoriin}
					kirjautunut={kirjautunut}
				></Tuotelokero>
				<Tuotelokero
					tuotekuva={tPaitaKuva5}
					tuotenimi="offf"
					tuotehinta={190}
					lisaaKoriin={lisaaKoriin}
					kirjautunut={kirjautunut}
				></Tuotelokero>
				<Tuotelokero
					tuotekuva={tPaitaKuva6}
					tuotenimi="offf hand"
					tuotehinta={220}
					lisaaKoriin={lisaaKoriin}
					kirjautunut={kirjautunut}
				></Tuotelokero>
			</Tuotenostot>
			<Kirjautuminen
				kirjautunut={kirjautunut}
				kirjaudu={kirjauduSisaan}
				uloskirjaudu={kirjauduUlos}
			></Kirjautuminen>
			<Pikaostoskori
				tuotemaara={tuotemaara}
				yhteissumma={yhteissumma}
				kirjautunut={kirjautunut}
			></Pikaostoskori>
			<VerkkokauppaFooter></VerkkokauppaFooter>
		</VerkkokauppaSivu>
	);
}

export default PaitakauppaApp;
