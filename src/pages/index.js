import React, { useEffect, useState } from 'react';
import { Layout } from '/src/components';
import { Navbar } from '../components/shared';
import {
	Splash,
	Contact,
	MidSplash,
	Menu,
	AboutUs,
	Map,
	FindUs,
} from '/src/screens/home';

const IndexPage = () => {
	const [activeSection, setActiveSection] = useState('home');

	return (
		<Layout>
			<Navbar activeSection={activeSection} />
			<main id="home-page">
				<Splash setActiveSection={setActiveSection} />
				<Contact setActiveSection={setActiveSection} />
				<MidSplash />
				<Menu
					setActiveSection={setActiveSection}
					activeSection={activeSection}
				/>
				<AboutUs />
				<Map />
				<FindUs />
			</main>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Dominic's Place</title>;
