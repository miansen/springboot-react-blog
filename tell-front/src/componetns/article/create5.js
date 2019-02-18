import React, { Component } from 'react';
import ReactQuill from 'react-quill';

class Create5 extends Component{
    constructor (props) {
        super(props);
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
        console.log(value)
    }

    render() {
        return (
            <ReactQuill theme="snow" value={this.state.text}
                        onChange={this.handleChange} />
        );
    }
}

export default Create5;