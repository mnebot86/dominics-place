import React from 'react';
import { BENEDICTS } from '../../utils/menu';

const Benedicts = () => {
	return (
		<div>
			<p>
				All served with two poached eggs over grilled English muffin and
				served with a side of home fries.
			</p>

			<ol>
				{BENEDICTS.map((item, idx) => (
					<li key={`benedict-${idx}`}>
						{item.name} {item.price}
					</li>
				))}
			</ol>
		</div>
	);
};

export default Benedicts;
