import React from 'react';
import { LITE_AND_FIT } from '../../utils/menu';

const LiteAndFit = () => {
	return (
		<div className="lite-and-fit">
			<h3>lite and fit</h3>

			<div className="menu-card-container">
				{LITE_AND_FIT.map((item, idx) => (
					<div key={`lite-${idx}`} className="card">
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

export default LiteAndFit;
