import React, { Component } from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';

/**
 * @Author: miansen
 * @Date: 2019/2/17
 * @description: react-codemirror2
 */
class Create3 extends Component{
    render() {
        return (
            <CodeMirror
                value='<h1>I ♥ react-codemirror2</h1>'
                options={{
                    mode: 'markdown',
                    theme: 'material',
                    lineNumbers: true
                }}
                onChange={(editor, data, value) => {
                    console.log(editor)
                    console.log(data)
                    console.log(value)
                }}
            />
        );
    }
}

export default Create3;