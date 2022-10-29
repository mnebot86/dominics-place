import React from 'react';
import { SIGNATURE_PLATES } from '../../utils/menu';

const Signature = () => {
	return (
		<div>
			<h4>Signature Plates</h4>

			{SIGNATURE_PLATES.map((item, idx) => (
				<div key={`signature-${idx}`}>
					<h6>
						{item.name} {item.price}
					</h6>
					<p>{item.description}</p>
				</div>
			))}
		</div>
	);
};

export default Signature;
