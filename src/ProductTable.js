import React, { Component } from "react";
import { ProductRow } from "./ProductRow";

export class ProductTable extends Component  
{  
    constructor(props)
    {
        super(props);
        this.handleDestroy = this.handleDestroy.bind(this);
    }

    handleDestroy(id)
    {
        this.props.onDestroy(id);
    }

    render() {
        const prods = Object.keys(this.props.products).map(key => this.props.products[key]);
        const rows = [];
        prods.forEach(
            (product) => {
                if (product.name.indexOf(this.props.filterText) != -1) {
                    rows.push(<ProductRow
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        onDestroy={this.handleDestroy}
                        />);
                }
            }
        );

        return (
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}