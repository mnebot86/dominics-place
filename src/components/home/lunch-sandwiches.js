import React from 'react';
import { LUNCH_SANDWICHES } from '../../utils/menu';

const LunchSandwiches = () => {
	return (
		<div>
			<h3>Sandwiches</h3>
			<p>
				Choice of White, Wheat, Italian, Rye, spinach wrap, white wrap,
				wheat wrap, tomato basil wrap, or sub roll
			</p>

			{!!LUNCH_SANDWICHES &&
				LUNCH_SANDWICHES.map((item, idx) => (
					<div key={`lunch-sandwich-${idx}`}>
						<h4>
							{item.name} {item.price}
						</h4>
						<p>{item.description}</p>
					</div>
				))}
		</div>
	);
};

export default LunchSandwiches;
