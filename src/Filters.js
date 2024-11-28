import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Filters extends Component
{
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) 
    {
        const value = e.target.value;
        const name = e.target.name;

        this.props.onFilter({
            [name]: value
        });
    }

    render() {
        return (
            <form class="my-3">
                <input type="text" placeholder="Search..." 
                    name="filterText" onChange={this.handleChange}
                    class="form-control"/>
            </form>
        )   
    }   
};