import React from 'react';
import LinkedIn from '/src/images/home/linkedin.svg';
import FB from '/src/images/home/fb.svg';
import Instagram from '/src/images/home/instagram.svg';

const FindUs = () => {
	return (
		<section id="find-us">
			<div>
				<h1>Find us on</h1>
				<div className="icon-container">
					<img src={LinkedIn} alt="LinkedIn" />
					<img src={FB} alt="Facebook" />
					<img src={Instagram} alt="Instagram" />
				</div>
			</div>
		</section>
	);
};

export default FindUs;
