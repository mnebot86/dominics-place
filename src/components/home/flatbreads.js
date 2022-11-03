import React from 'react';
import { FLATBREADS } from '../../utils/menu';

const Flatbreads = () => {
	return (
		<div>
			<h3>Flatbreads</h3>

			{!!FLATBREADS &&
				FLATBREADS.map((item, idx) => (
					<div key={`flatbreads-${idx}`}>
						<h4>
							{item.name} {item.price}
						</h4>
						<p>{item.price}</p>
					</div>
				))}
		</div>
	);
};

export default Flatbreads;
