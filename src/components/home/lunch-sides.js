import React from 'react';
import { LUNCH_SIDES } from '../../utils/menu';

const LunchSides = () => {
	return (
		<div>
			<h3>Sides</h3>

			<div className="menu-card-container">
				{!!LUNCH_SIDES &&
					LUNCH_SIDES.map((item, idx) => (
						<div key={`lunch-sides-${idx}`} className="card">
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
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default LunchSides;
