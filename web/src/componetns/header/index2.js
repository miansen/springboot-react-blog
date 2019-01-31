import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Layout,Menu,Row,Col,Input,Dropdown,Icon} from 'antd';

import Login from '../login/index';

const { Header: Index } = Layout;
const Search = Input.Search;

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to="/login">登录</Link>
        </Menu.Item>
        <Menu.Item key="3"><Link to="/register">注册</Link></Menu.Item>
    </Menu>
);
class Header extends Component{

    constructor (props) {
        super(props);
        this.state = {
            visible: false, //登录窗口是否可见
            isNameOrPassErr: false //账号或者密码是否错误
        }
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
            <Index style={{background: '#fff', textAlign: 'center', padding: 0}}>
                <Row gutter={16}>
                    <Col xs={0} sm={0} md={2} lg={2} xl={2} xxl={2}/>
                    <Col xs={20} sm={22} md={6} lg={5} xl={5} xxl={4}>
                        <div className="logo">
                            <a id="logo" href="/" style={{fontSize: "1.4em",color: "#222"}}>
                                {<img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style={{height: "32px",marginRight: "16px"}}/>}
                                {<img alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg" style={{height: "30px",marginRight: "16px"}}/>}
                            </a>
                        </div>
                    </Col>
                    <Col xs={4} sm={0} md={0} lg={0} xl={0} xxl={0}>
                        <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                            <a className="ant-dropdown-link" href="#">
                                <Icon type="bars" theme="outlined" style={{ fontSize: '32px', color: '#222' }}/>
                            </a>
                        </Dropdown>
                    </Col>
                    <Col xs={0} sm={0} md={14} lg={15} xl={15} xxl={16}>
                        <div className="search-box" style={{float: "left"}}>
                            <Search placeholder = "细选你感兴趣的资讯" style={{width:300}}/>
                        </div>
                        <Menu style={{display: "flex",borderBottom: "0px solid #e8e8e8",lineHeight: "60px",float: "right"}} mode="horizontal">
                            <Menu.Item><Link to="/">首页</Link></Menu.Item>
                            <Menu.Item><Link to="#">主题</Link></Menu.Item>
                            <Menu.Item><Link to="/">站点</Link></Menu.Item>
                            <Menu.Item onClick={this.showModal}>登录</Menu.Item>
                            <Login
                                wrappedComponentRef={this.saveFormRef}
                                visible={this.state.visible}
                                onCancel={this.handleCancel}
                                onCreate={this.handleCreate}
                                isNameOrPassErr={this.state.isNameOrPassErr}
                            />
                            <Menu.Item onClick={this.showModal}>注册</Menu.Item>
                        </Menu>
                    </Col>
                    <Col xs={0} sm={0} md={2} lg={2} xl={2} xxl={2}/>
                </Row>
            </Index>
        );
    }
}

export default Header;