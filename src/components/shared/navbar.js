import React, { useState, useEffect, useCallback } from 'react';
import DPLogo from '/src/images/common/dp-logo.svg';
import classnames from 'classnames';

const THRESHOLD = 10;

const Navbar = ({ activeSection }) => {
	const isWindow = typeof window !== 'undefined';
	const [isSticky, setIsSticky] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const toggle = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	const handleScroll = () => {
		const position = window.scrollY;

		if (position > THRESHOLD) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

	const classes = classnames({ sticky: isSticky });
	const hamburgerClass = classnames({ open: isOpen });
	const menuClass = classnames({ open: isOpen }, 'link-container');
	const menuLinkClass = classnames(
		{ selected: activeSection === 'menu' },
		'link'
	);
	const contactClass = classnames(
		{ selected: activeSection === 'contact' },
		'link'
	);

	useEffect(() => {
		if (!isWindow) return;

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		const fade = () => {
			const listItems = document.querySelectorAll(
				'.link-container ul li'
			);

			listItems.forEach((listItem) => {
				if (!!isOpen) listItem.classList.toggle('open');
				else listItem.classList.remove('open');
			});
		};

		fade();
	}, [isOpen]);

	return (
		<nav id="nav" className={classes}>
			<div className="container">
				<div className="logo">
					<a href="#splash">
						<img src={DPLogo} alt="Dominic's Place Restaurant" />
					</a>
				</div>

				<div className={menuClass}>
					<ul>
						<li className={contactClass} onClick={toggle}>
							<a href="#contact">Contact</a>
						</li>

						<li className={menuLinkClass} onClick={toggle}>
							<a href="#menu">Menu</a>
						</li>

						<li>
							<a className="cta-button" href="#" onClick={toggle}>
								Order
							</a>
						</li>
					</ul>
				</div>

				<div id="hamburger" className={hamburgerClass} onClick={toggle}>
					<div className="line line-1" />
					<div className="line line-2" />
					<div className="line line-3" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
