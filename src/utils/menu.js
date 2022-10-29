export const BREAKFAST = [
	'Traditional',
	'Benedicts',
	'Sandwiches',
	'Omelets',
	'Signature',
	'Sweets',
	'Lite',
	'Grits',
	'Sides',
	"Kid's",
];

export const LUNCH = [
	'Appetizers',
	'Entrees',
	'Burgers',
	'Sandwiches',
	'Flatbreads',
	'Salads',
	'Sides',
	"Kid's",
	'Drinks',
];

export const MENU_TYPES = {
	Traditional: TRADITIONAL,
	Benedicts: BENEDICTS,
	Sandwiches: BREAKFAST_SANDWICHES,
};

export const TRADITIONAL = [
	{
		name: 'Little Dudes',
		description: '2 eggs any style, homefries, & choice of toast.',
		price: '$9.99',
		image: '',
	},
	{
		name: 'Dominic Special',
		description:
			'2 eggs any style, choice of meat (4 bacon, 4 sausage or ham), homefries, & choice of toast.',
		price: '$13.99',
		image: '',
	},
	{
		name: 'Papa Special',
		description:
			'2 scrambled eggs with chorizo, monterey jack cheddar cheese, homefries, & choice of toast.',
		price: '$14.99',
		image: '',
	},
	{
		name: 'Sweet Treat',
		description:
			'2 eggs any style served with a waffle, homefries & choice of toast',
		price: '$12.99',
		image: '',
	},
	{
		name: 'Only in America',
		description:
			"3 eggs any style, 2 pancakes, or 2 French toast. Choice of meat (4 bacon, 4 sausage or ham), homefries, & choice of toast. Don't forget to add fruit or chocolate chips to your cakes or French toast",
		price: '$16.99',
		image: '',
	},
];

export const BENEDICTS = [
	{
		name: 'Bacon Benedict',
		price: '$15.99',
	},
	{
		name: 'Ham Benedict',
		price: '$16.99',
	},
	{
		name: 'Hash Benedict',
		price: '$16.99',
	},
	{
		name: 'Avocado Benedict',
		price: '$14.99',
	},
	{
		name: 'Florentine (tomatoes and spinach) Benedict',
		price: '$14.99',
	},
	{
		name: 'Crab Benedict',
		price: '$18.99',
	},
	{
		name: 'Lobster Benedict',
		price: '$22.99',
	},
	{
		name: 'Salmon',
		price: '$18.99',
	},
];

export const BREAKFAST_SANDWICHES = [
	{
		name: 'California',
		price: '$12.99',
		description:
			'Bacon, Avocado, slice tomato, chipotle mayonnaise and Swiss chess.',
	},
	{
		name: 'International',
		price: '14.99',
		description: 'Bacon, Ham, slice tomatoes and cheddar cheese.',
	},
	{
		name: 'BLT',
		price: '$9.99',
		description: 'Bacon, lettuce, sliced tomatoes and mayonnaise.',
	},
];

export const OMELETS = [
	{
		name: 'Chicken Fajita',
		price: '$16.99',
		description:
			'Chicken, onions, cheddar top with salsa, sour cream, and avocado',
	},
	{
		name: 'Philly Steak and Cheese',
		price: '$17.99',
		description: 'Shaved steak, onions, mushrooms, and provolone cheese.',
	},
	{
		name: 'Hash and Onion',
		price: '$7.99',
		description: 'Homemade hash, onions, and mozzarella cheese',
	},
];

export const GRITS = [
	{
		name: 'Cheese',
		price: '$.99',
	},
	{
		name: 'Crab Cakes',
		price: '$7.99',
	},
	{
		name: 'Lobster',
		price: '$9.99',
	},
	{
		name: 'Sausage',
		price: '$2.99',
	},
	{
		name: 'Salmon',
		price: '$6.99',
	},
	{
		name: 'Shrimp',
		price: '$6.99',
	},
	{
		name: 'Bacon',
		price: '$2.99',
	},
];

export const SIGNATURE_PLATES = [
	{
		name: 'Salmon Croquette',
		price: '$17.99',
		description:
			'Crispy and tender with oh so much flavor. Our secret recipe consists of fresh salmon, peppers and onions. Seasoned to perfection topped with sriracha sour cream.',
	},
	{
		name: 'Crispy Chicken and Waffles',
		price: '$16.99',
		description:
			'Breaded chicken tenders and crispy bacon strips stuffed between 2 golden waffles with strawberries and whipped cream',
	},
	{
		name: 'Salmon Lax',
		price: '$17.99',
		description:
			'Served on an everything bagel with smooth cream cheese then topped with fresh diced tomatoes, red onions and capers',
	},
	{
		name: 'County Style Sausage, Biscuits, and Gravy',
		price: '$14.99',
		description: 'Served with 2 eggs any style',
	},
];

export const SWEET_TREATS = [
	{
		name: 'Buttermilk Pancakes',
		price: '$11.99',
		description:
			'3 buttermilk pancakes topped with smooth butter and powdered sugar',
	},
	{
		name: 'Golden Waffle / Half Waffle',
		price: '$11.99 / $7.99',
		description:
			'A perfectly crisp waffle served with a dollop of butter and powdered sugar.',
	},
	{
		name: 'French Toast',
		price: '$14.99',
		description:
			'3 slice of thick Texas French Toast topped with butter and powdered sugar.',
	},
	{
		name: 'Crepes',
		price: '$12.99',
		description:
			"3 thin, tasty crepes filled with sweet, savory cream cheese. Topped with butter and whipped cream. Add any topping for $9.99 each. Strawberries, Blueberries, Banana's, Walnuts, Reese's peanut butter cups, coconut, chocolate chips.",
	},
];

export const LITE_AND_FIT = [
	{
		name: 'Yogurt or Oatmeal',
		price: 'Cup-$5.99 / Bowl-$8.99',
		description:
			"Adding topping: .99/each Strawberries, blueberries, banana, chocolate chip, coconut, raisins, Reese's peanut butter cups granola, walnuts.",
	},
	{
		name: 'Veggie Egg-white Omelette',
		price: '$16.99',
		description:
			'2 egg white, onions, spinach, broccoli, roasted peppers, served with fruit and wheat toast.',
	},
	{
		name: 'Veggie Wrap',
		price: '$15.99',
		description:
			'Combination of onions, mushroom, roasted peppers, diced tomatoes, broccoli, and spinach served on a wheat wrap with a side of carrots and celery.',
	},
	{
		name: 'Avocado Toast',
		price: '$12.99',
		description:
			'Thinly sliced avocado spread along 2 slices of rye toast topped with 2 hard boiled eggs, sesame seeds, and diced tomatoes',
	},
	{
		name: 'Veggie Crepes',
		price: '$15.99',
		description:
			'Veggie filled crepes topped with hollandaise sauce, onions, roasted peppers, broccoli, tomato, and spinach.',
	},
];

export const BREAKFAST_SIDES = [
	{
		name: 'Bacon',
		price: '$4.99',
	},
	{
		name: 'Sausage',
		price: '$4.99',
	},
	{
		name: 'Turkey Bacon',
		price: '$5.99',
	},
	{
		name: 'Chicken Sausage',
		price: '$5.99',
	},
	{
		name: 'Grits',
		price: '$2.99',
	},
	{
		name: 'Hash',
		price: '$6.99',
	},
	{
		name: 'Ham',
		price: '$4.99',
	},
	{
		name: '1 Pancake',
		price: '$3.99',
	},
	{
		name: 'Homefries',
		price: '$3.99',
	},
	{
		name: '1 French Toast',
		price: '$3.99',
	},
	{
		name: 'Toast',
		price: '$2.99',
	},
	{
		name: 'Egg',
		price: '$.99',
	},
	{
		name: 'Chorizo',
		price: '$5.99',
	},
	{
		name: 'Fruit',
		price: '$4.99/cup or $7.99/bowl',
	},
];

export const KID_MENU = [
	{
		name: 'Fruit bowl',
		price: '$5.99',
	},
	{
		name: '1 French Toast or 1 pancakes',
		price: '$6.99',
		description: 'Served with 1 bacon and 1 sausage.',
	},
	{
		name: '1 Egg any style, 1 bacon, 1 sausage',
		price: '$7.99',
		description: 'Served with toast and fruit cup',
	},
	{
		name: 'Happy face pancake',
		price: '$4.99',
		description: 'Whipped cream and strawberries',
	},
	{
		name: "Kids' drinks",
		price: '$2.49',
	},
];
