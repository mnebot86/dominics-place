import React from 'react';

const Contact = () => {
	return (
		<section id="contact">
			<div>
				<div className="contact-wrapper">
					<div className="inner-wrapper">
						<p className="title">Location</p>
						<a
							className="link"
							href="https://maps.apple.com/maps?q=1270+mineral+spring+ave+north+providence+ri=02904"
							target="_blank">
							<p>1270 Mineral Spring Ave </p>
							<p>North Providence RI</p>
							<p>02904</p>
						</a>
					</div>

					<div className="inner-wrapper">
						<p className="title">Hours</p>
						<p>7 days Week</p>
						<p>6am -3pm</p>
					</div>

					<div className="inner-wrapper">
						<p className="title">Contact</p>
						<p>
							<a
								className="link"
								href="tel:401-335-5339"
								target="_blank">
								(401)-335-5339
							</a>
						</p>
						<a className="link" href="mailto:#" target="_blank">
							<p>email@email.com</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
