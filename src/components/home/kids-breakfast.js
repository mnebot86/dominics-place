import React from 'react';
import { KID_MENU } from '../../utils/menu';

const KidsBreakfast = () => {
	return (
		<div>
			<h3>Dominic and Friends - Kid's Menu</h3>

			{!!KID_MENU &&
				KID_MENU.map((item, idx) => (
					<div key={`kid-breakfast-${idx}`}>
						<h4>
							{item.name} {item.price}
						</h4>
						{!!item.description && <p>{item.description}</p>}
					</div>
				))}
		</div>
	);
};

export default KidsBreakfast;
