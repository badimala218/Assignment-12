import React, {Component} from 'react';

export class ProductRow extends Component
{
    constructor(props)
    {
        super(props);
        this.destroy = this.destroy.bind(this);
    }

    destroy() 
    {
        console.log(this.props);
        console.log(this.props.id);
        this.props.onDestroy(this.props.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.category}</td>
                <td>{this.props.price}</td>
                <td><input type="button" value="Delete" 
                    className="btn btn-info text-light bg-info"
                    onClick={this.destroy}/></td>
            </tr>
        )
    }
}