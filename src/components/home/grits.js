import React from 'react';
import { GRITS } from '../../utils/menu';

const Grits = () => {
	return (
		<div className="grits">
			<h3>OC Creamy Grits $9.99</h3>
			<p>
				Creamy southern style grits topped with diced onions and
				peppers. Served with 2 eggs any style. Load them up by adding
				your favorites.
			</p>

			<div className="menu-card-container">
				{GRITS.map((item, idx) => (
					<div key={`grits-${idx}`} className="card">
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

export default Grits;
