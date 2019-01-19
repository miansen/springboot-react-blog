import React, { Component } from 'react';
import { Button, Modal, Form, Input, Radio,Alert } from 'antd';

const FormItem = Form.Item;

/**
 * @Author: miansen
 * @Date: 2018/11/28
 * @description: 登录窗口
 */
class CollectionCreateForm  extends Component{
    render() {
        const { visible, onCancel, onCreate, form, isNameOrPassErr } = this.props;
        const { getFieldDecorator } = form;
        // console.log("getFieldDecorator "+getFieldDecorator);
        return (
            <Modal
                visible={visible}
                title="快速登录"
                okText="登录"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <Alert message="登录功能即将上线" type="error" />
                    <FormItem label="帐号">
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入您的帐号!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="密码">
                        {getFieldDecorator('password',{
                            rules: [{ required: true, message: '请输入您的密码!' }],
                        })(<Input type="password" />)}
                    </FormItem>
                    {isNameOrPassErr ? <Alert message="帐号或者密码错误!" type="error" /> : null}
                </Form>
            </Modal>
        );
    }
}

const Login = Form.create()(CollectionCreateForm);

export default Login;