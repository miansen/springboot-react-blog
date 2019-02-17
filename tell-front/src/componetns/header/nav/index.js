import React from 'react';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu,Dropdown,Icon,Avatar,Modal,Button } from 'antd';

import './index.less';
import Login from "../../login";
import Register from '../../register/index';
import Axios from "../../../axios/axios";
import {openNotificationWithIcon} from "../../notification";
import {updateChannelAndLoadData} from '../../../redux/index/action';
import {loginAsync,RegisterAsync,logout} from '../../../redux/user/action';
import connect from "react-redux/es/connect/connect";

const Item = Menu.Item;
const confirm = Modal.confirm;
/**
 * @Author: miansen
 * @Date: 2018/11/28
 * @description: 响应式导航条
 */
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: [],
            phoneOpen: false, //是否打开导航菜单
            theme: "light ", //导航菜单的主题颜色
            visible: false, //登录窗口是否可见
            visibleRegister: false //注册窗口是否可见
        };
    }

    //渲染前加载
    componentWillMount(){
        this.fetchData();
    }

    //获取频道列表
    fetchData(){
        if(this.state.channel.length === 0 || this.state.loading){
            Axios.get('/channels').then(({data}) => {
                // console.log(data);
                if(data.code === 200){
                    this.setState({
                        loading: false,
                        channel: data.detail
                    })
                }else {
                    {openNotificationWithIcon("error","Error",data.description)}
                }
            }).catch( error => {
                {openNotificationWithIcon("error","Error",error.message)}
            })
        }
    }

    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    //切换频道
    updateChannel(channelName){
        const data = {
            url: "/channel/articles",
            channelName: channelName,
            pageNo:1

        }
        this.props.updateChannelAndLoadData(data);
        // 切换频道的同时跳转到首页
        this.context.router.history.push('/')
    }

    //回到首页
    goToIndex(){
        const data = {
            url: "/channel/articles",
            channelName: "推荐",
            pageNo:1

        }
        this.props.updateChannelAndLoadData(data);
        // 跳转到首页
        this.context.router.history.push('/')
    }

    //显示登录窗口
    showModal = (e) => {
        this.setState({
            visible: true
        });
    }

    //显示注册窗口
    showModalRegister = (e) => {
        this.setState({
            visibleRegister: true
        });
    }

    //关闭登录窗口
    handleCancel = () => {
        this.setState({
            visible: false,
            isNameOrPassErr: false
        });
    }

    //关闭注册窗口
    handleCancelRegister = () => {
        this.setState({
            visibleRegister: false,
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
            const username = values.username;
            const password = values.password;
            this.props.loginAsync({username: username,password: password});
            this.setState({
                visible: false
            });
        });
    }

    /**
     * 点击注册按钮的事件
     * values:输入对象，包含用户名和密码
     */
    handleCreateRegister = () => {
        const form = this.formRefRegister.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            form.resetFields();
            const username = values.username;
            const password = values.password;
            const email = values.email;
            this.props.registerAsync({username: username,password: password,email: email});
            this.setState({
                visibleRegister: false
            });
        });
    }

    // 登出
    logout = () => {
        const logout = this.props.logout;
        confirm({
            title: '确定要登出吗？',
            cancelText: '取消',
            okTextL: '确定',
            onOk() {
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                localStorage.removeItem("avatar");
                logout();
            },
            onCancel() {
            },
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    saveFormRefRegister = (formRef) => {
        this.formRefRegister = formRef;
    }

    //移动设备下打开导航菜单
    phoneClick = () => {
        this.setState({
            phoneOpen: !this.state.phoneOpen,
        });
    }

    render() {
        console.log("登录用户名："+this.props.state.user.loginUsername)
        // 频道列表
        const menu = (
            <Menu>
                {
                    this.state.channel.map((key,i) => (
                        <Menu.Item>
                            <a onClick={() => this.updateChannel(key.channelName)}>{key.channelName}</a>
                        </Menu.Item>
                    ))
                }
            </Menu>
        );
        // 用户选项
        const userMenu = <Menu>
            <Menu.Item>
                <a onClick={this.logout}>登出</a>
            </Menu.Item>
        </Menu>;
        const props = { ...this.props };
        const isMobile = props.isMobile;
        delete props.isMobile;
        // const navData = { menu0: '首页', menu1: '主题', menu2: '站点', menu3: '登录' };
        const navData = { menu3: '登录',menu4: '注册'};
        const navChildren = Object.keys(navData)
            .map((key, i) => {
                // console.log("key:"+key);
                if(key == 'menu3'){
                    return (<Item key={i} onClick={this.showModal}>{navData[key]}</Item>)
                }else if(key == 'menu4'){
                    return (<Item key={i} onClick={this.showModalRegister}>{navData[key]}</Item>)
                }else if(key == 'menu2'){
                    return (<Item key={i}><Link to="/sites">{navData[key]}</Link></Item>)
                }else{
                    return (<Item key={i}><Link to="/">{navData[key]}</Link></Item>)
                }
            });

        return (<TweenOne
            component="header"
            animation={{ opacity: 0, type: 'from' }}
            {...props}
        >
            <TweenOne
                className={`${this.props.className}-logo`}
                animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                id={`${this.props.id}-logo`}
            >
                <a onClick={() => this.goToIndex()}>
                    <img width="100%" src="https://static.tuzixinwen.com/images/logo-15.png" />
                </a>
            </TweenOne>
            <div className="header1-nav">
                <a onClick={() => this.goToIndex()} style={{paddingRight: "20px"}}>首页</a>
                <Link to="/themes" className="create-article">发现</Link>
            </div>
            {isMobile ? (<div
                className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
                id={`${this.props.id}-menu`}
            >
                <div
                    className={`${this.props.className}-phone-nav-bar`}
                    onClick={() => {
                        this.phoneClick();
                    }}
                >
                    <em />
                    <em />
                    <em />
                </div>
                <div
                    className={`${this.props.className}-phone-nav-text`}
                >
                    {
                        this.props.state.user.loginUsername ?
                            <Menu
                                mode="inline"
                                theme={this.state.theme}
                            >
                                <Item key="0">{this.props.state.user.loginUsername}</Item>
                                <Item key="1" onClick={this.logout}>登出</Item>
                            </Menu>

                            :
                            <Menu
                                mode="inline"
                                theme={this.state.theme}
                            >
                                {navChildren}
                            </Menu>
                    }
                </div>
            </div>) : (<TweenOne
                className={`${this.props.className}-nav`}
                animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
            >
                {
                    this.props.state.user.loginUsername ?
                        <div>
                            <Link to="/create" className="create-article">写文章</Link>
                            <Dropdown overlay={userMenu} placement="bottomCenter">
                                <a className="ant-dropdown-link" href="#" style={{padding: "0 10px"}}>
                                    <Avatar size={30} src={this.props.state.user.loginAvatar} key="0"/>
                                </a>
                            </Dropdown>
                        </div>

                        :
                        <div>
                            <a onClick={this.showModal} style={{padding: "0 20px"}}>登录</a>
                            <a onClick={this.showModalRegister} style={{padding: "0 20px"}}>注册</a>
                        </div>
                }
                <Login
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
                <Register
                    wrappedComponentRef={this.saveFormRefRegister}
                    visible={this.state.visibleRegister}
                    onCancel={this.handleCancelRegister}
                    onCreate={this.handleCreateRegister}
                />
            </TweenOne>)}
        </TweenOne>);
    }
}

Nav.propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.object,
    id: PropTypes.string,
};

Nav.defaultProps = {
    className: 'header0',
};

export default connect(
    state => ({
        state: state
    }),
    {
        updateChannelAndLoadData: updateChannelAndLoadData,
        loginAsync: loginAsync,
        registerAsync: RegisterAsync,
        logout: logout
    }
)(Nav)