import React from 'react';
import { BREAKFAST_SANDWICHES } from '../../utils/menu';

const BreakfastSandwiches = () => {
	return (
		<div>
			<p>
				1 egg any style, choice of toast or a wrap, and homefries, add
				on egg $.99 each
			</p>

			<h4>Build Your Own $7.99</h4>
			<h5>
				Protein <span>$2.99 each</span>
			</h5>
			<p>Bacon, sausage, ham, chorizo, pepperoni</p>
			<h5>
				Extra Protein <span>($6.99 each)</span>
			</h5>
			<p>Shrimp, Salmon, Chicken, sausage $3.99, turkey bacon $3.99</p>

			{BREAKFAST_SANDWICHES.map((item, idx) => (
				<div key={`breakfast-sandwich-${idx}`}>
					<h4>
						{item.name} {item.price}
					</h4>
					<p>{item.description}</p>
				</div>
			))}
		</div>
	);
};

export default BreakfastSandwiches;
