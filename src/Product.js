import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Filters } from './Filters';
import { ProductTable } from './ProductTable';
import { ProductForm } from './ProductForm';

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
        products: {
            '0': {"id": 0, "category":"School Supplies", "price":"$35", "name":"Globe"},
        }
    }

    state = 
    {
        products: productList,
        filterText: '',
    }

    constructor(props)
    {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
    }

    handleFilter(filterInput)
    {
        this.setState(filterInput);
    }

    handleSave(product)
    {
        if (!product.id)
        {
            product.id = new Date().getTime();
        }

        this.setState((prevState) => {
            let products = prevState.products;
            products[product.id] = product;
            return { products }
        });
    }

    handleDestroy(productId)
    {
        this.setState((prevState) => {
            let products = prevState.products;
            delete products[productId];
            return { products }
        });
    }

    render() 
    {
        return (
            <main className="m-1">
                <h1>My Inventory</h1>
                <Filters onFilter={this.handleFilter}/>
                <ProductTable products={productList} 
                    filterText={this.state.filterText}
                    onDestroy={this.handleDestroy}/>
                <ProductForm onSave={this.handleSave} 
                    />
            </main>
        )
    }
}