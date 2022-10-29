import React from 'react';
import { BREAKFAST_SIDES } from '../../utils/menu';

const BreakfastSides = () => {
	return (
		<div>
			<h4>Sides</h4>
			<ol>
				{!!BREAKFAST_SIDES &&
					BREAKFAST_SIDES.map((item, idx) => (
						<li key={`breakfast-side-${idx}`}>
							{item.name} {item.price}
						</li>
					))}
			</ol>
		</div>
	);
};

export default BreakfastSides;
