import React from 'react';
import { BENEDICTS } from '../../utils/menu';

const Benedicts = () => {
	return (
		<div className="benedicts">
			<div className="content">
				<p>
					All served with two poached eggs over grilled English muffin
					and served with a side of home fries.
				</p>
			</div>

			<div className="menu-card-container">
				{BENEDICTS.map((item, idx) => (
					<div key={`benedict-${idx}`} className="card">
						<div
							className="card-img"
							style={{
								backgroundImage: `url(${item.image})`,
							}}
						/>

						<div className="card-content">
							{item.name} {item.price}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Benedicts;
