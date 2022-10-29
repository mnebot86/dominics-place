import React from 'react';
import { GRITS } from '../../utils/menu';

const Grits = () => {
	return (
		<div>
			<h4>OC Creamy Grits $9.99</h4>
			<p>
				Creamy southern style grits topped with diced onions and
				peppers. Served with 2 eggs any style. Load them up by adding
				your favorites.
			</p>

			<ol>
				{GRITS.map((item, idx) => (
					<li key={`grits-${idx}`}>
						{item.name} {item.price}
					</li>
				))}
			</ol>
		</div>
	);
};

export default Grits;
