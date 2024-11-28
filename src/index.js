import React from 'react';
import { createRoot } from 'react-dom/client';
import { Product } from './Product';

let productList = {
  '1': {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet'},
  '2': {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
  '3': {id: 3, category: 'Music', price: '$4,500', name: 'Tuba'},
  '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
  '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
  '6': {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
};


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Product />
);