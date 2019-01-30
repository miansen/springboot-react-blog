import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu,Dropdown, Icon,Button } from 'antd';

import './index.less';
import Login from "../../login";
import Logo from '../../../assets/images/logo.png';
import Axios from "../../../axios/axios";
import {openNotificationWithIcon} from "../../notification";
import {updateChannelAndLoadData} from '../../../redux/index/action';
import connect from "react-redux/es/connect/connect";

const Item = Menu.Item;

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
            isNameOrPassErr: false //账号或者密码是否错误
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

    //切换频道
    updateChannel(channelName){
        const data = {
            url: "/channel/articles",
            channelName: channelName,
            pageNo:1

        }
        this.props.updateChannelAndLoadData(data);
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

    //移动设备下打开导航菜单
    phoneClick = () => {
        this.setState({
            phoneOpen: !this.state.phoneOpen,
        });
    }

    render() {
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
                }else if(key == 'menu1'){
                    return (<Item key={i}><Link to="/themes">{navData[key]}</Link></Item>)
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
                <Link to="/">
                    <img width="100%" src="https://static.tuzixinwen.com/images/logo-15.png" />
                </Link>
            </TweenOne>
            <div className="header1-nav">
                <Dropdown overlay={menu} placement="bottomCenter">
                    <a className="ant-dropdown-link" href="#">
                        分类浏览<Icon type="down" />
                    </a>
                </Dropdown>
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
                    <Menu
                        /*defaultSelectedKeys={['0']}*/
                        mode="inline"
                        theme={this.state.theme}
                    >
                        {navChildren}
                    </Menu>
                </div>
            </div>) : (<TweenOne
                className={`${this.props.className}-nav`}
                animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
            >
                <Menu
                    mode="horizontal"
                    /*defaultSelectedKeys={['0']}*/
                    id={`${this.props.id}-menu`}
                >
                    {navChildren}
                </Menu>
                <Login
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    isNameOrPassErr={this.state.isNameOrPassErr}
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
    {updateChannelAndLoadData: updateChannelAndLoadData}
)(Nav)