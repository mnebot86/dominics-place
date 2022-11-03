import React from 'react';
import { SALADS } from '../../utils/menu';

const Salads = () => {
	return (
		<div>
			<h3>Salads</h3>
			<p>Add protein - Chicken $6, Salmon $7, Shrimp $7</p>

			{!!SALADS &&
				SALADS.map((item, idx) => (
					<div key={`salad-${idx}`}>
						<h4>
							{item.name} {item.price}
						</h4>
						<p>{item.description}</p>
					</div>
				))}
		</div>
	);
};

export default Salads;
