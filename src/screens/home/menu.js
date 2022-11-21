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
	Appetizers,
	Entrees,
	Burgers,
	LunchSandwiches,
	Flatbreads,
	Salads,
	LunchSides,
	LunchKidsMenu,
	Drinks,
} from '../../components/home';

const ITEMS_LIST = {
	Traditional: <Traditional />,
	Benedicts: <Benedicts />,
	'Breakfast Sandwiches': <BreakfastSandwiches />,
	Omelets: <Omelets />,
	Grits: <Grits />,
	Signature: <Signature />,
	Sweets: <SweetTreat />,
	Lite: <LiteAndFit />,
	Sides: <BreakfastSides />,
	"Kid's": <KidsBreakfast />,
	Appetizers: <Appetizers />,
	Entrees: <Entrees />,
	Burgers: <Burgers />,
	Sandwiches: <LunchSandwiches />,
	Flatbreads: <Flatbreads />,
	Salads: <Salads />,
	'Lunch Sides': <LunchSides />,
	'Kids Lunch': <LunchKidsMenu />,
	Drinks: <Drinks />,
};

const Menu = () => {
	const [selectedCategory, setSelectedCategory] = useState(BREAKFAST);
	const [listName, setListName] = useState('Traditional');

	const handleClick = (type) => {
		setListName(type);
	};

	return (
		<section id="menu">
			<div>
				<p>Menu</p>
				<ul className="breakfast-lunch-menu">
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
