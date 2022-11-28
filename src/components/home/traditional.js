import React from 'react';
import { TRADITIONAL } from '../../utils/menu';

const Traditional = () => {
	return (
		<div className="traditional">
			<p>
				Served with homefries and choices of toast Add an egg for $1.25
			</p>

			<div className="menu-card-container">
				{TRADITIONAL.map((item, idx) => (
					<div key={`menu-item-${idx}`} className="card">
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

export default Traditional;
