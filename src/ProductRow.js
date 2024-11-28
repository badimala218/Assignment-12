import React from 'react';

export const ProductRow = (props) =>
{
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td><input type="button" value="Delete"/></td>
        </tr>
    )
}