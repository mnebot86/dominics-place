import React from 'react';
import { BURGERS } from '../../utils/menu';

const Burgers = () => {
	return (
		<div>
			<h3>Burgers</h3>
			<p>Served with French fries or onion strings, on a brioche bun</p>

			<div className="menu-card-container">
				{!!BURGERS &&
					BURGERS.map((item, idx) => (
						<div key={`burger-${idx}`} className="card">
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

export default Burgers;
