import React, { Component } from 'react';
import {MonacoDiffEditor} from 'react-monaco-editor';

const defaultCode =
    `export default {
  name: 'name',
  code: 'code'
}`;

class Create2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            code: defaultCode,
        }
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }

    onChangeHandle(value,e) {
        this.setState({
            code: value
        });
    }

    editorDidMountHandle(editor, monaco) {
        console.log('editorDidMount', editor);
        editor.focus();
    }

    render() {
        const code = this.state.code;
        const options1 = {
            selectOnLineNumbers: true,
            renderSideBySide: false
        };
        const code1 = "// your original code...";
        const code2 = "// a different version...";
        const options = {
            //renderSideBySide: false
        };
        return (
            <MonacoDiffEditor
                width="800"
                height="600"
                language="javascript"
                original={code1}
                value={code2}
                options={options}
            />
        );
    }
}

export default Create2;