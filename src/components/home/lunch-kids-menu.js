import React from 'react';
import { LUNCH_KIDS_MENU } from '../../utils/menu';

const LunchKidsMenu = () => {
	return (
		<div>
			<h4>Kids'</h4>

			<div className="menu-card-container">
				{!!LUNCH_KIDS_MENU &&
					LUNCH_KIDS_MENU.map((item, idx) => (
						<div key={`kids-lunch-${idx}`} className="card">
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

export default LunchKidsMenu;
