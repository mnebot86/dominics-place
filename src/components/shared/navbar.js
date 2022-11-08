import React from 'react';
import DPLogo from '/src/images/common/dp-logo.svg';

const Navbar = () => {
	return (
		<nav id="nav">
			<img src={DPLogo} alt="Dominic's Place Restaurant" />

			<div className="link-container">
				<ul>
					<li className="link">
						<a href="#home">Home</a>
					</li>
					<li className="link">
						<a href="#contact">Contact</a>
					</li>
					<li className="link">
						<a href="#menu">Menu</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
