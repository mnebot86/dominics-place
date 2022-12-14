import React from 'react';
import { OMELETS } from '../../utils/menu';

const Omelets = () => {
	return (
		<div className="omelets">
			<p>
				Served with homefries and choice of toast, add an egg $.99 or
				egg whites $1.49, Substitute fruit cup $1.49/Grits $2.99
			</p>

			<div className="menu-card-container">
				{OMELETS.map((item, idx) => (
					<div key={`omelet-${idx}`} className="card">
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

			<h4>Build your Own Omelet $7.99</h4>
			<h6>
				Cheese <span>($.99 each)</span>
			</h6>

			<p>
				American, cheddar, mozzarella, provolone, Swiss, feta,
				gorgonzola.
			</p>

			<h6>
				Veggies <span>($1.25 each)</span>
			</h6>
			<p>
				Onions, roasted peppers, mushrooms, olives, spinach, broccoli,
				banana peppers, diced mushrooms, black olives
			</p>

			<h6>
				Protein <span>($ 2.99 each)</span>
			</h6>
			<p>Bacon, sausage, ham, chorizo, pepperoni</p>

			<h6>
				Extras <span>($6.99 each)</span>
			</h6>
			<p>Shaved steak, chicken, hash, shrimp, salmon</p>
			<p>Chicken sausage $3.99 turkey bacon $.99</p>
		</div>
	);
};

export default Omelets;
