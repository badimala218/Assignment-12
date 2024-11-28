import React, { Component } from 'react';

const RESET_VALUES = {id: '', category: '', price: '', name: ''};

export class ProductForm extends Component
{
    constructor(props)
    {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
        }
    }

    handleSave = e =>
    {
        this.props.onSave(this.state.product);
        this.setState({
            product: Object.assign({}, RESET_VALUES), errors: {}
        });
        e.preventDefault();
    }

    handleChange(e)
    {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState((prevState) => {
            prevState.product[name] = value;
            return { product: prevState.product}
        });
    }

    render() {
        return (
            <form>
                <div className="form-group w-50">
                    <h2>Add a new product</h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" 
                        onChange={this.handleChange}
                        value={this.state.product.name}
                        className="form-control"/>
                    <br/>
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" id="category"
                        onChange={this.handleChange}
                        value={this.state.product.category}
                        className="form-control"/>
                    <br/>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price"
                        onChange={this.handleChange}
                        value={this.state.product.price}
                        className="form-control"/>
                    <br/>
                    <input type="button" value="Save" 
                        className="btn btn-info text-light"
                        onClick={this.handleSave}/>
                </div>
            </form>
        )
    }
}