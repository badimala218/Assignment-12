import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Filters } from './Filters';
import { ProductTable } from './ProductTable';
import { ProductForm } from './ProductForm';

// let productList = [
//     {"category":"Books", "price": "$19.99", "name": "Tarot Cards"},
//     {"category":"Music", "price": "$5,000", "name": "Accordion"},
//     {"category":"Produce", "price": "$5", "name": "Watermelon Chunks"},
//     {"category":"Furniture", "price": "$799", "name": "Chaise Lounge"},
//     {"category":"Office Supplies", "price": "$230", "name": "Plastic Organizer"},
//     {"category":"Seasonal", "price": "$10", "name": "Zombie Lawn Flamingos"},
//     {"category":"Pharmacy", "price":"$23.50", "name":"Multivitamins"},
// ];

let productList = {
    '1': {id: 1, category: 'Books', price: '$19.99', name: 'Tarot Cards'},
    '2': {id: 2, category: 'Music', price: '$5,000', name: 'Accordion'},
    '3': {id: 3, category: 'Produce', price: '$5', name: 'Watermelon Chunks'},
    '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
    '5': {id: 5, category: 'Office Supplies', price: '$230', name: 'Plastic Organizer'},
    '6': {id: 6, category: 'Seasonal', price: '$10', name: 'Zombie Lawn Flamingos'},
    '7': {id: 7, category: 'Pharmacy', price: '$23.40', name: 'Multivitamins'},
 };
 

export class Product extends Component 
{
    static defaultProps = 
    {
        products: [
            {"category":"School Supplies", "price":"$35", "name":"Globe"},
        ]
    }

    state = 
    {
        products: productList,
        filterText: '',
    }

    constructor(props)
    {
        super(props);
    }

    render() 
    {
        return (
            <main>
                <h1>My Inventory</h1>
                <Filters />
                <ProductTable products={productList} filterText={this.state.filterText}/>
                <ProductForm />
            </main>
        )
    }
}