import React from 'react';
import { DRINKS } from '../../utils/menu';

const Drinks = () => {
	return (
		<div className="drinks">
			<h3>Drinks</h3>

			<div className="menu-card-container">
				{!!DRINKS &&
					DRINKS.map((item, idx) => (
						<div key={`drinks-${idx}`} className="card">
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

export default Drinks;
