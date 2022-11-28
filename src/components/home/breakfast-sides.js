import React from 'react';
import { BREAKFAST_SIDES } from '../../utils/menu';

const BreakfastSides = () => {
	return (
		<div className="breakfast-sides">
			<h4>Sides</h4>
			<div className="menu-card-container">
				{!!BREAKFAST_SIDES &&
					BREAKFAST_SIDES.map((item, idx) => (
						<div key={`breakfast-side-${idx}`} className="card">
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

export default BreakfastSides;
