import React, { Component } from 'react';

export class ProductForm extends Component
{
    save = e =>
    {
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.save}>
                <h2>Enter a new product</h2>
                <label>Name<br/>
                    <input type="text"/>
                </label>
                <br/>
                <label>Category<br/>
                    <input type="text"/>
                </label>
                <br/>
                <label>Price<br/>
                    <input type="text"/>
                </label>
                <br/>
                <input type="button" value="Save"/>
            </form>
        )
    }
}