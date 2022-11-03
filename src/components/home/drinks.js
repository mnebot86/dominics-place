import React from 'react';
import { DRINKS } from '../../utils/menu';

const Drinks = () => {
	return (
		<div>
			<h3>Drinks</h3>

			{!!DRINKS &&
				DRINKS.map((item, idx) => (
					<div key={`drinks-${idx}`}>
						<h4>
							{item.name} {item.price}
						</h4>
					</div>
				))}
		</div>
	);
};

export default Drinks;
