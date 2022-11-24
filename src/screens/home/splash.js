import React, { useEffect } from 'react';
import useIntersectionObserver from '/src/hooks/useIntersectionObserver';

const Splash = ({ setActiveSection }) => {
	const [setRef, visible] = useIntersectionObserver();

	useEffect(() => {
		if (visible) {
			setActiveSection('home');
		}
	}, [visible]);

	return (
		<section id="splash" ref={setRef}>
			<div className="background"></div>
		</section>
	);
};

export default Splash;
