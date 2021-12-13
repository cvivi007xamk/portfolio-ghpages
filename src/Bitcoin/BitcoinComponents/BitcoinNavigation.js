import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

function BitcoinNavigation(props) {
	return (
		<div className="header-div">
			<header className="bitcoin-header">
				<nav>
					<ul className="nav-ul">
						<li>
							<Link to="/bitcoin">Home</Link>
						</li>
						<li>
							<Link to="/bitcoin/wallet">Wallet</Link>
						</li>
						<li>
							<Link to="/bitcoin/prices">Prices</Link>
						</li>
						<li>
							<Link to="/bitcoin/about">About</Link>
						</li>
					</ul>
				</nav>
				<Title />
			</header>
		</div>
	);
}

export default BitcoinNavigation;
