import React from 'react';
import { KID_MENU } from '../../utils/menu';

const KidsBreakfast = () => {
	return (
		<div className="kids-breakfast">
			<h3>Dominic and Friends - Kid's Menu</h3>

			<div className="menu-card-container">
				{!!KID_MENU &&
					KID_MENU.map((item, idx) => (
						<div key={`kid-breakfast-${idx}`} className="card">
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
								{!!item.description && (
									<p>{item.description}</p>
								)}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default KidsBreakfast;
