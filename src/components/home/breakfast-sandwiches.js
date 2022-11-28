import React from 'react';
import { BREAKFAST_SANDWICHES } from '../../utils/menu';

const BreakfastSandwiches = () => {
	return (
		<div className="breakfast-sandwiches">
			<p>
				1 egg any style, choice of toast or a wrap, and homefries, add
				on egg $.99 each
			</p>

			<div className="content">
				<h3>Build Your Own $7.99</h3>
				<p>
					Protein <span>$2.99 each</span>
				</p>

				<p>Bacon, sausage, ham, chorizo, pepperoni</p>
				<h5>
					Extra Protein <span>($6.99 each)</span>
				</h5>
				<p>
					Shrimp, Salmon, Chicken, sausage $3.99, turkey bacon $3.99
				</p>
			</div>

			<div className="menu-card-container">
				{BREAKFAST_SANDWICHES.map((item, idx) => (
					<div key={`breakfast-sandwich-${idx}`} className="card">
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

export default BreakfastSandwiches;
