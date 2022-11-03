import React from 'react';
import { LUNCH_KIDS_MENU } from '../../utils/menu';

const LunchKidsMenu = () => {
	return (
		<div>
			<h4>Kids'</h4>

			{!!LUNCH_KIDS_MENU &&
				LUNCH_KIDS_MENU.map((item, idx) => (
					<div key={`kids-lunch-${idx}`}>
						<h4>
							{item.name} {item.price}
						</h4>
					</div>
				))}
		</div>
	);
};

export default LunchKidsMenu;
