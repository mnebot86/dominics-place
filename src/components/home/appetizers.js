import React from 'react';
import { APPETIZERS } from '../../utils/menu';

const Appetizers = () => {
	return (
		<div>
			<h3>Appetizers</h3>

			<div className="menu-card-container">
				{!!APPETIZERS &&
					APPETIZERS.map((item, idx) => (
						<div key={`appetizer-${idx}`} className="card">
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
								{!!item.flavors &&
									item.flavors.map((item, idx) => (
										<li key={`flavors-${idx}`}>{item}</li>
									))}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Appetizers;
