import type { RequiredDataFromCollectionSlug } from 'payload'

export const Menu: RequiredDataFromCollectionSlug<'menu'>[] = [
  {
    name: 'Breakfast',
    tenant: 1,
  },
  {
    name: 'Lunch',
    tenant: 1,
  },
  {
    name: 'Dinner',
    tenant: 1,
  },
  {
    name: 'Brunch',
    tenant: 1,
  },
  {
    name: 'Special Menu',
    tenant: 1,
  },
  {
    name: 'Breakfast',
    tenant: 2,
  },
  {
    name: 'Lunch',
    tenant: 2,
  },
  {
    name: 'Dinner',
    tenant: 2,
  },
  {
    name: 'Brunch',
    tenant: 2,
  },
  {
    name: 'Special Menu',
    tenant: 2,
  },
]

export const foodCategories: RequiredDataFromCollectionSlug<'food-categories'>[] = [
  {
    name: 'Appetizers',
    menu: 1,
    tenant: 1,
  },
  {
    name: 'Main Course',
    menu: 1,
    tenant: 1,
  },
  {
    name: 'Desserts',
    menu: 1,
    tenant: 1,
  },
  {
    name: 'Fusion Starters',
    menu: 1,
    tenant: 1,
  },
  {
    name: 'Signature Dishes',
    menu: 1,
    tenant: 1,
  },
]

export const menuItems: RequiredDataFromCollectionSlug<'menu-items'>[] = [
  {
    name: 'Eggs Benedict',
    description: 'Eggs Benedict is a popular breakfast dish from Scotland.',
    price: 7.99,
    foodCategory: 1,
    tenant: 1,
    image: 1,
  },
  {
    name: 'Avocado Toast',
    description: 'Fresh avocado spread on artisanal sourdough toast with poached eggs.',
    price: 9.99,
    foodCategory: 1,
    tenant: 1,
    image: 1,
  },
  {
    name: 'Belgian Waffles',
    description: 'Fluffy Belgian waffles served with maple syrup and fresh berries.',
    price: 8.99,
    foodCategory: 1,
    tenant: 1,
    image: 1,
  },
  {
    name: 'Breakfast Burrito',
    description: 'Scrambled eggs, cheese, potatoes, and bacon wrapped in a warm tortilla.',
    price: 10.99,
    foodCategory: 1,
    tenant: 1,
    image: 1,
  },
  {
    name: 'French Toast',
    description: 'Classic French toast dusted with powdered sugar and cinnamon.',
    price: 8.49,
    foodCategory: 1,
    tenant: 1,
    image: 1,
  },
  {
    name: 'Eggs Benedict',
    description: 'Eggs Benedict is a popular breakfast dish from Scotland.',
    price: 7.99,
    foodCategory: 1,
    tenant: 2,
    image: 1,
  },
  {
    name: 'Avocado Toast',
    description: 'Fresh avocado spread on artisanal sourdough toast with poached eggs.',
    price: 9.99,
    foodCategory: 1,
    tenant: 2,
    image: 1,
  },
  {
    name: 'Belgian Waffles',
    description: 'Fluffy Belgian waffles served with maple syrup and fresh berries.',
    price: 8.99,
    foodCategory: 1,
    tenant: 2,
    image: 1,
  },
  {
    name: 'Breakfast Burrito',
    description: 'Scrambled eggs, cheese, potatoes, and bacon wrapped in a warm tortilla.',
    price: 10.99,
    foodCategory: 1,
    tenant: 2,
    image: 1,
  },
  {
    name: 'French Toast',
    description: 'Classic French toast dusted with powdered sugar and cinnamon.',
    price: 8.49,
    foodCategory: 1,
    tenant: 2,
    image: 1,
  },
]

// payload.create({
//   collection: 'media',
//   data: imageHero1,
//   file: hero1Buffer,
// }),
