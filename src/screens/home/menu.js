import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '/src/hooks/useIntersectionObserver';
import classNames from 'classnames';
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
import { useCallback } from 'react';

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

const MenuNav = ({ setSelectedCategory }) => {
	const [selected, setSelected] = useState('Breakfast');

	const breakfastClass = classNames({ active: selected === 'Breakfast' });
	const lunchClass = classNames({ active: selected === 'Lunch' });

	const handleBreakfastClick = () => {
		setSelectedCategory(BREAKFAST);
		setSelected('Breakfast');
	};

	const handleLunchClick = () => {
		setSelectedCategory(LUNCH);
		setSelected('Lunch');
	};

	return (
		<ul className="breakfast-lunch-menu">
			<li className={breakfastClass} onClick={handleBreakfastClick}>
				Breakfast
			</li>

			<li className={lunchClass} onClick={handleLunchClick}>
				Lunch
			</li>
		</ul>
	);
};

const Menu = ({ setActiveSection }) => {
	const [setRef, visible] = useIntersectionObserver();

	useEffect(() => {
		if (visible) {
			setActiveSection('menu');
		}
	}, [visible]);

	const [listName, setListName] = useState('Traditional');
	const [selectedCategory, setSelectedCategory] = useState(BREAKFAST);
	const [isOpen, setIsOpen] = useState(false);

	const toggle = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	const handleClick = (type) => {
		setListName(type);
	};

	const categoryNavClass = classNames({ open: isOpen }, 'category-nav');

	return (
		<section id="menu" ref={setRef}>
			<div>
				<h2>Menu</h2>
				<MenuNav setSelectedCategory={setSelectedCategory} />

				<div className="menu-nav-container">
					<h3 className="item-title" onClick={toggle}>
						{listName}
					</h3>

					<ul className={categoryNavClass} onClick={toggle}>
						{selectedCategory.map((list, idx) => {
							return (
								<li
									key={`Category-list-${idx}`}
									className={
										listName === list ? 'active' : ''
									}
									onClick={() => handleClick(list)}>
									{list}
								</li>
							);
						})}
					</ul>
				</div>

				<div className="menu-item-container">
					{ITEMS_LIST[listName]}
				</div>
			</div>
		</section>
	);
};

export default Menu;
