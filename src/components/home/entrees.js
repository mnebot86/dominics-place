import React from 'react';
import { ENTREES } from '../../utils/menu';

const Entrees = () => {
	return (
		<div>
			<h3>Entrees</h3>

			{!!ENTREES &&
				ENTREES.map((item, idx) => (
					<div key={`entrees-${idx}`}>
						<h4>
							{item.name} {item.price}
						</h4>
						<p>{item.description}</p>

						{!!item.protein && <p>{item.protein}</p>}
					</div>
				))}
		</div>
	);
};

export default Entrees;
