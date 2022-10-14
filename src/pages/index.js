import * as React from 'react';
import { Layout } from '/src/components';
import { Splash } from '/src/screens/home';

const IndexPage = () => {
	return (
		<Layout>
			<main id="home-page">
				<Splash />
			</main>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Dominic's Place</title>;
