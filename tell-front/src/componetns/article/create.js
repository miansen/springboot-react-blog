import React, { Component } from 'react';
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import { Form, Input, Button } from 'antd'

/**
 * @Author: miansen
 * @Date: 2019/2/1
 * @description:写文章
 */
class Create extends Component{

    componentDidMount () {

        // 异步设置编辑器内容
        setTimeout(() => {
            this.props.form.setFieldsValue({
                content: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
            })
        }, 1000)

    }

    handleSubmit = (event) => {

        event.preventDefault()

        this.props.form.validateFields((error, values) => {
            if (!error) {
                const submitData = {
                    title: values.title,
                    content: values.content.toHTML() // or values.content.toHTML()
                }
                console.log(submitData)
            }
        })

    }

    render() {
        const { getFieldDecorator } = this.props.form
        const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media' ]

        return (
            <div className="demo-container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="文章标题">
                        {getFieldDecorator('title', {
                            rules: [{
                                required: true,
                                message: '请输入标题',
                            }],
                        })(
                            <Input size="large" placeholder="请输入标题"/>
                        )}
                    </Form.Item>
                    <Form.Item label="文章正文">
                        {getFieldDecorator('content', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                required: true,
                                validator: (_, value, callback) => {
                                    if (value.isEmpty()) {
                                        callback('请输入正文内容')
                                    } else {
                                        callback()
                                    }
                                }
                            }],
                        })(
                            <BraftEditor
                                className="my-editor"
                                controls={controls}
                                placeholder="请输入正文内容"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button size="large" type="primary" htmlType="submit">提交</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Form.create()(Create)