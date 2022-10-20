import React from 'react';

const Contact = () => {
	return (
		<section id="contact">
			<div>
				<div className="location">
					<p>Location</p>
					<a href="https://maps.apple.com/maps?q=1270+mineral+spring+ave+north+providence+ri+02904">
						1270 Mineral Spring Ave North Providence RI 02904
					</a>
				</div>

				<div className="hours">
					<p>Hours</p>
					<p>7 days Weekly 6am -3pm</p>
				</div>

				<div className="contact">
					<p>Contact</p>
					<a href="tel:4013355339">(401)-335-5339 </a>
					<a href="mailto:email@email.com">email@email.com</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
