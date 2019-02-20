import React, { Component } from 'react';
import marked from 'marked';
import { Form, Input, Button, Tabs, Select } from 'antd'

import './index.css';
import Axios from '../../axios/axios';
import {openNotificationWithIcon} from "../notification";
const { TextArea } = Input;
const TabPane = Tabs.TabPane;
const Option = Select.Option;
class Create7 extends Component{
    constructor (props) {
        super(props);
        this.state = {
            previewContent: marked(''), //渲染后的正文，
            themes: [], //分类列表
            article:{
                title: null,
                content: null,
                theme_name: null,
                author: localStorage.getItem("username")
            }
        }
    }

    // 获取分类列表
    componentWillMount(){
        Axios.get("/themes").then(({data}) => {
            if (data.code === 200) {
                this.setState({
                    themes: data.detail
                })
            }else {
                {openNotificationWithIcon("error","Error",data.description)}
            }
        }).catch(error => {
            {openNotificationWithIcon("error","Error",error.message)}
        })
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

    //
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    handleBlur = () => {
        console.log('blur');
    }

    handleFocus = () => {
        console.log('focus');
    }

    render() {
        const { getFieldDecorator } = this.props.form
        console.log("get:"+this.props.form.getFieldValue('content'))
        console.log(this.state.previewContent)
        const themes = this.state.themes.map((v,i) => {
            return (<Option value={v.themeName}>{v.themeName}</Option>)
        })
        console.log(this.state.themes)
        console.log(this.state.article)
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
                    <Form.Item label="文章头图">
                        {getFieldDecorator('avatar')(
                            <Input size="large" placeholder="请输入头图链接"/>
                        )}
                    </Form.Item>
                    <Form.Item label="文章分类">
                        {getFieldDecorator('theme')(
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="请选择一个分类"
                                optionFilterProp="children"
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                {themes}
                            </Select>
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