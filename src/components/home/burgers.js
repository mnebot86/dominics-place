import React from 'react';
import { BURGERS } from '../../utils/menu';

const Burgers = () => {
	return (
		<div>
			<h3>Burgers</h3>
			<p>Served with French fries or onion strings, on a brioche bun</p>

			{!!BURGERS &&
				BURGERS.map((item, idx) => (
					<div key={`burger-${idx}`}>
						<h4>
							{item.name} {item.price}
						</h4>
						<p>{item.description}</p>
					</div>
				))}
		</div>
	);
};

export default Burgers;
