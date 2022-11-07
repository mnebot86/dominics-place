import * as React from 'react';
import { Layout } from '/src/components';
import {
	Splash,
	Contact,
	MidSplash,
	Menu,
	AboutUs,
	Map,
} from '/src/screens/home';

const IndexPage = () => {
	return (
		<Layout>
			<main id="home-page">
				<Splash />
				<Contact />
				<MidSplash />
				<Menu />
				<AboutUs />
				<Map />
			</main>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Dominic's Place</title>;
