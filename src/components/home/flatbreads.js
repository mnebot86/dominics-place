import React from 'react';
import { FLATBREADS } from '../../utils/menu';

const Flatbreads = () => {
	return (
		<div>
			<h3>Flatbreads</h3>

			<div className="menu-card-container">
				{!!FLATBREADS &&
					FLATBREADS.map((item, idx) => (
						<div key={`flatbreads-${idx}`} className="card">
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
								<p>{item.price}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Flatbreads;
