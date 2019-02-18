import React, { Component } from 'react';
import Editor from 'for-editor';

/**
 * @Author: miansen
 * @Date: 2019/2/17
 * @description: for-editor
 */
class Create4 extends Component{
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange(value) {
        console.log(value)
        this.setState({
            value
        })
    }

    render() {
        const { value } = this.state
        return (
            <Editor value={value} onChange={this.handleChange.bind(this)} />
        );
    }
}

export default Create4;