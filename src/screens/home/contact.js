import React, { useEffect } from 'react';
import useIntersectionObserver from '/src/hooks/useIntersectionObserver';

const Contact = ({ setActiveSection }) => {
	const [setRef, visible] = useIntersectionObserver({ threshold: 0.5 });

	useEffect(() => {
		if (visible) {
			setActiveSection('contacts');
		}
	}, [visible]);

	return (
		<section id="contact" ref={setRef}>
			<div>
				<div className="container">
					<div>
						<h2>Hours of Operation</h2>
						<p>Open 7 days a week</p>
						<p>6am to 3pm</p>
					</div>
					<div className="hours-img img" />
				</div>

				<div className="container">
					<div>
						<h2>Our Location</h2>
						<a href="https://maps.apple.com/maps?q=1270+mineral+spring+ave+north+providence+ri+02904">
							<p>1270 Mineral Spring Ave</p>
							<p>North Providence RI 02904</p>
						</a>
					</div>
					<div className="location-img img" />
				</div>

				<div className="container">
					<div>
						<h2>Contact</h2>
						<a href="tel:4013355339">
							<p>(401)-335-5339</p>
						</a>
					</div>
					<div className="contact-img img" />
				</div>
			</div>
		</section>
	);
};

export default Contact;
