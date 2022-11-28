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

			<div className="menu-card-container">
				{!!LUNCH_SANDWICHES &&
					LUNCH_SANDWICHES.map((item, idx) => (
						<div key={`lunch-sandwich-${idx}`} className="card">
							<div
								className="card-img"
								style={{
									backgroundImage: `url(${item.image})`,
								}}
							/>

							<div className="card-content">
								<p className="card-title">
									{item.name} {item.price}
								</p>
								<p>{item.description}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default LunchSandwiches;
