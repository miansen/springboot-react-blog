import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

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
                title="快速注册"
                okText="注册"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="用户名">
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入您的用户名!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="密码">
                        {getFieldDecorator('password',{
                            rules: [{ required: true, message: '请输入您的密码!' }],
                        })(<Input type="password" />)}
                    </FormItem>
                    <FormItem label="邮箱">
                        {getFieldDecorator('email')(<Input type="email" />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

const register = Form.create()(CollectionCreateForm);

export default register;