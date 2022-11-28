import React from 'react';
import { SALADS } from '../../utils/menu';

const Salads = () => {
	return (
		<div>
			<h3>Salads</h3>
			<p>Add protein - Chicken $6, Salmon $7, Shrimp $7</p>

			<div className="menu-card-container">
				{!!SALADS &&
					SALADS.map((item, idx) => (
						<div key={`salad-${idx}`} className="card">
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

export default Salads;
