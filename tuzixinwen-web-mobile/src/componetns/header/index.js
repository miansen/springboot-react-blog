import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';

import Login from '../login/index';
import './index.css';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false, //登录窗口是否可见
            isNameOrPassErr: false //账号或者密码是否错误
        };
    }

    //显示登录窗口
    showModal = (e) => {
        this.setState({
            visible: true
        });
    }

    //关闭登录窗口
    handleCancel = () => {
        this.setState({
            visible: false,
            isNameOrPassErr: false
        });
    }

    /**
     * 点击登录按钮的事件
     * values:输入对象，包含用户名和密码
     */
    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            if(values.username == 'admin' && values.password == '123'){
                this.setState({
                    visible: false
                });
            }else{
                this.setState({
                    isNameOrPassErr: true
                });
            }
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }
    render() {
        return (
            <div data-v-662bf35a="" className="header">
                <div data-v-662bf35a="" className="user clickable">
                    <Icon type="user" style={{color: "#fff",fontSize: "18px",paddingTop: "3px",paddingLeft: "10px"}} onClick={this.showModal}/>
                </div>
                <a data-v-662bf35a="" className="search clickable"></a>
                <div data-v-662bf35a="" className="logo-wrapper">
                    <Link to="/">
                        <div data-v-662bf35a="" className="logo-text" style={{textAlign: "center"}}>
                            <img src="https://static.tuzixinwen.com/images/logo-16.png"/>
                        </div>
                    </Link>
                    <div data-v-662bf35a="" className="refresh"></div>
                </div>
                <Login
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    isNameOrPassErr={this.state.isNameOrPassErr}
                />
            </div>
        );
    }
}
