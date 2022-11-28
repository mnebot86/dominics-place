import React from 'react';
import { SWEET_TREATS } from '../../utils/menu';

const SweetTreat = () => {
	return (
		<div className="sweet-treat">
			<h4>Sweet Treats</h4>

			<div className="menu-card-container">
				{SWEET_TREATS.map((item, idx) => (
					<div key={`treats-${idx}`} className="card">
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

export default SweetTreat;
