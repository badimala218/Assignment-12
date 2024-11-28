import React from "react";
import { ProductRow } from "./ProductRow";

export const ProductTable = (props) => {
    const prods = Object.keys(props.products).map(key => props.products[key]);
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
            </tr>
            {prods.map(
                (product, i) => {
                    if (product.name.indexOf(props.filterText) != -1) {
                    return <ProductRow
                        key={i}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        />
                    }
                }
            )}
        </table>
    )
}