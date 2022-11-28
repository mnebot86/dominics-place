import React from 'react';
import { ENTREES } from '../../utils/menu';

const Entrees = () => {
	return (
		<div>
			<h3>Entrees</h3>

			<div className="menu-card-container">
				{!!ENTREES &&
					ENTREES.map((item, idx) => (
						<div key={`entrees-${idx}`} className="card">
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

								{!!item.protein && <p>{item.protein}</p>}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Entrees;
