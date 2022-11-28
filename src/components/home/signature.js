import React from 'react';
import { SIGNATURE_PLATES } from '../../utils/menu';

const Signature = () => {
	return (
		<div className="signature-plates">
			<div className="menu-card-container">
				{SIGNATURE_PLATES.map((item, idx) => (
					<div key={`signature-${idx}`} className="card">
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

							<p>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Signature;
