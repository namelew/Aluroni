import menu from 'data/bill-of-fare.json';

export type Dish = typeof menu[0];

export type Menu = Dish[];
