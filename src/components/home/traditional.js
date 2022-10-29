import React from 'react';
import { TRADITIONAL } from '../../utils/menu';

const Traditional = () => {
	return (
		<div>
			<p>
				Served with homefries and choices of toast Add an egg for $1.25
			</p>

			{TRADITIONAL.map((item, idx) => (
				<div key={`menu-item-${idx}`}>
					<p>{item.name}</p>
				</div>
			))}
		</div>
	);
};

export default Traditional;
