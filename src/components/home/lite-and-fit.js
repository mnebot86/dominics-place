import React from 'react';
import { LITE_AND_FIT } from '../../utils/menu';

const LiteAndFit = () => {
	return (
		<div>
			<h4>lite and fit</h4>

			{LITE_AND_FIT.map((item, idx) => (
				<div key={`lite-${idx}`}>
					<h5>
						{item.name} {item.price}
					</h5>
					<p>{item.description}</p>
				</div>
			))}
		</div>
	);
};

export default LiteAndFit;
