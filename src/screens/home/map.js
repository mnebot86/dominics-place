import React from 'react';
import GoogleMap from '/src/images/home/google-maps.png';

const Map = () => {
	return (
		<section id="map">
			<div>
				<h1>1270 Mineral Spring Ave North Providence RI 02904</h1>

				<img
					src={GoogleMap}
					alt="1270 Mineral Spring Ave North Providence RI 02904"
				/>
			</div>
		</section>
	);
};

export default Map;
