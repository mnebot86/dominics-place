import React from 'react';
import { LUNCH_SIDES } from '../../utils/menu';

const LunchSides = () => {
	return (
		<div>
			<h3>Sides</h3>

			{!!LUNCH_SIDES &&
				LUNCH_SIDES.map((item, idx) => (
					<div key={`lunch-sides-${idx}`}>
						<h4>
							{item.name} {item.price}
						</h4>
					</div>
				))}
		</div>
	);
};

export default LunchSides;
