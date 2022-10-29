import React, { useState } from 'react';
import { MENU_TYPES, BREAKFAST, LUNCH, TRADITIONAL } from '../../utils/menu';
import {
	Traditional,
	Benedicts,
	BreakfastSandwiches,
	Omelets,
	Grits,
	Signature,
	SweetTreat,
	LiteAndFit,
	BreakfastSides,
	KidsBreakfast,
} from '../../components/home';

const ITEMS_LIST = {
	Traditional: <Traditional />,
	Benedicts: <Benedicts />,
	Sandwiches: <BreakfastSandwiches />,
	Omelets: <Omelets />,
	Grits: <Grits />,
	Signature: <Signature />,
	Sweets: <SweetTreat />,
	Lite: <LiteAndFit />,
	Sides: <BreakfastSides />,
	"Kid's": <KidsBreakfast />,
};

const Menu = () => {
	const [selectedCategory, setSelectedCategory] = useState(BREAKFAST);
	const [selected, setSelected] = useState(TRADITIONAL);
	const [listName, setListName] = useState('Traditional');

	const getCategoryList = (type) => {
		return type;
	};

	const getMenuItems = (type) => {
		return type;
	};

	const handleClick = (type) => {
		console.log({ type });
		setListName(type);
		setSelected(MENU_TYPES[type]);
	};

	return (
		<section id="menu">
			<div>
				<p>Menu</p>
				<ul>
					<li onClick={() => setSelectedCategory(BREAKFAST)}>
						Breakfast
					</li>
					<li onClick={() => setSelectedCategory(LUNCH)}>Lunch</li>
				</ul>

				<ul>
					{selectedCategory.map((list, idx) => {
						return (
							<li
								key={`Category-list-${idx}`}
								onClick={() => handleClick(list)}>
								{list}
							</li>
						);
					})}
				</ul>

				{ITEMS_LIST[listName]}
			</div>
		</section>
	);
};

export default Menu;
