import React from 'react';
import { SWEET_TREATS } from '../../utils/menu';

const SweetTreat = () => {
	return (
		<div>
			<h4>Sweet Treats</h4>

			{SWEET_TREATS.map((item, idx) => (
				<div key={`treats-${idx}`}>
					<h6>
						{item.name} {item.price}
					</h6>
					<p>{item.description}</p>
				</div>
			))}
		</div>
	);
};

export default SweetTreat;
