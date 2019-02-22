import React, { Component } from 'react';
import {Input, Tabs, Form, Button, Upload, Select, Row, Col, Icon } from 'antd';

import Axios from '../../axios/axios';
import {openNotificationWithIcon} from "../notification";
/**
 * @Author: miansen
 * @Date: 2019/2/21
 * @description: 个人设置
 */
const TabPane = Tabs.TabPane;
const Option = Select.Option;
class Settings extends Component{
    constructor (props) {
        super(props);
        this.state = {
            user: '',
            imageUrl: '',
            loading: false
        }
    }

    // 获取用户信息
    componentWillMount(){
        Axios.get("/users/"+localStorage.getItem("username")).then(({data}) => {
            if (data.code === 200) {
                this.setState({
                    user: data.detail
                })
            } else {
                {openNotificationWithIcon("error","Error",data.description)}
            }
        }).catch(error => {
            {openNotificationWithIcon("error","Error",error.message)}
        })
    }

    // 上传头像
    uploadHandleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            console.log(info.file)
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">上传头像</div>
            </div>
        );
        return (
            <div className="content">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
                        <div style={{marginBottom: "20px"}}>
                            <h2>个人设置</h2>
                            <Tabs tabPosition="left">
                                <TabPane tab="基本设置" key="1">
                                    <div>
                                        <Form.Item label="个人简介">
                                            {getFieldDecorator('signature',{
                                                initialValue: this.state.user.signature
                                            })(
                                                <Input size="large"/>
                                            )}
                                        </Form.Item>
                                        <Form.Item label="个人网站">
                                            {getFieldDecorator('website',{
                                                initialValue: this.state.user.website
                                            })(
                                                <Input size="large"/>
                                            )}
                                        </Form.Item>
                                        <Upload
                                            name="avatar"
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            action="https://sm.ms/api/upload"
                                            onChange={this.uploadHandleChange}
                                            smfile="avatar"
                                        >
                                            {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" /> : uploadButton}
                                        </Upload>
                                        <Form.Item>
                                            <Button size="large" type="primary" htmlType="submit">提交</Button>
                                        </Form.Item>
                                    </div>
                                </TabPane>
                                <TabPane tab="帐号设置" key="2">
                                    <div>
                                        <Form.Item label="旧密码">
                                            {getFieldDecorator('oldPassword')(
                                                <Input size="large"/>
                                            )}
                                        </Form.Item>
                                        <Form.Item label="新密码">
                                            {getFieldDecorator('newPassword')(
                                                <Input size="large"/>
                                            )}
                                        </Form.Item>
                                        <Form.Item label="确认新密码">
                                            {getFieldDecorator('newPassword')(
                                                <Input size="large"/>
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            <Button size="large" type="primary" htmlType="submit">提交</Button>
                                        </Form.Item>
                                    </div>
                                </TabPane>
                                <TabPane tab="隐私设置" key="3">
                                    <div>
                                        <Form.Item label="谁可以看到我发表的文章">
                                            {getFieldDecorator('articleHide',{
                                                initialValue: "all"
                                            })(
                                                <Select style={{ width: 120 }}>
                                                    <Option value="all">所有人</Option>
                                                    <Option value="me">只有我自己</Option>
                                                </Select>
                                            )}
                                        </Form.Item>
                                        <Form.Item label="谁可以看到我发表的评论">
                                            {getFieldDecorator('commentHide',{
                                                initialValue: "all"
                                            })(
                                                <Select style={{ width: 120 }}>
                                                    <Option value="all">所有人</Option>
                                                    <Option value="me">只有我自己</Option>
                                                </Select>
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            <Button size="large" type="primary" htmlType="submit">提交</Button>
                                        </Form.Item>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={8} xl={8} xxl={8}></Col>
                </Row>
            </div>
        );
    }
}

export default Form.create()(Settings)