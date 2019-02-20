import React, { Component } from 'react';
import marked from 'marked';
import { Form, Input, Button, Tabs } from 'antd'

import './index.css';
const { TextArea } = Input;
const TabPane = Tabs.TabPane;
class Create7 extends Component{
    constructor (props) {
        super(props);
        this.state = {
            previewContent: marked('')
        }
    }

    handleSubmit = (event) => {

        event.preventDefault()

        this.props.form.validateFields((error, values) => {
            if (!error) {
                console.log(values)
            }
        })

    }

    onTabClick = () => {
        const content = this.props.form.getFieldValue('content')
        this.setState({
            previewContent: marked(content ? content : '')
        })
    }


    render() {
        const { getFieldDecorator } = this.props.form
        console.log("get:"+this.props.form.getFieldValue('content'))
        console.log(this.state.previewContent)
        return (
            <div className="demo-container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="文章标题">
                        {getFieldDecorator('title', {
                            rules: [{
                                required: true,
                                message: '请输入标题'
                            }],
                        })(
                            <Input size="large" placeholder="请输入标题"/>
                        )}
                    </Form.Item>
                    <Form.Item label="文章正文">
                        {getFieldDecorator('content', {
                            rules: [{
                                required: true,
                                message: '请输入正文内容'
                            }],
                        })(
                            <div className="card-container">
                                <Tabs onTabClick={this.onTabClick}>
                                    <TabPane tab="编辑" key="1">
                                        <TextArea rows={4} autosize={{ minRows: 22, maxRows: 22 }} placeholder="请输入正文（支持Markdown）"/>
                                    </TabPane>
                                    <TabPane tab="预览" key="2">
                                        <div className="article-body markdown-body" dangerouslySetInnerHTML={{__html: this.state.previewContent}}></div>
                                    </TabPane>
                                </Tabs>
                            </div>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button size="large" type="primary" htmlType="submit">提交</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create()(Create7)