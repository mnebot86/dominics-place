import React from 'react';
import { APPETIZERS } from '../../utils/menu';

const Appetizers = () => {
	return (
		<div>
			<h3>Appetizers</h3>

			{!!APPETIZERS &&
				APPETIZERS.map((item, idx) => (
					<div key={`appetizer-${idx}`}>
						<h4>
							{item.name} {item.price}
						</h4>
						<p>{item.description}</p>
						{!!item.flavors &&
							item.flavors.map((item, idx) => (
								<li key={`flavors-${idx}`}>{item}</li>
							))}
					</div>
				))}
		</div>
	);
};

export default Appetizers;
