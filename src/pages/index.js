import * as React from 'react';
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
	return (
		<Layout>
			<Navbar />
			<main id="home-page">
				<Splash />
				<Contact />
				<MidSplash />
				<Menu />
				<AboutUs />
				<Map />
				<FindUs />
			</main>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Dominic's Place</title>;
