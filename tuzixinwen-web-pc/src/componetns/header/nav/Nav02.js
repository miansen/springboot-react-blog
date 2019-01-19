import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu,Row,Col } from 'antd';

import './index.less';
import connect from "react-redux/es/connect/connect";
import {updateChannelAndLoadData} from "../../../redux/index/action";


const Item = Menu.Item;

/**
 * @Author: miansen
 * @Date: 2018/11/28
 * @description: 响应式导航条
 */
class Nav02 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneOpen: false, //是否打开导航菜单
            theme: "light ", //导航菜单的主题颜色
        };
    }

    //更新频道
    updateChannel(channelName){
        window.scrollTo(0,0); //点击频道按钮的同时滚轮回到顶部
        const data = {
            url: "/channel/articles",
            channelName: channelName,
            pageNo:1

        }
        this.props.updateChannelAndLoadData(data);
    }

    //移动设备下打开导航菜单
    phoneClick = () => {
        this.setState({
            phoneOpen: !this.state.phoneOpen,
        });
    }

    render() {
        const props = { ...this.props };
        const isMobile = props.isMobile;
        delete props.isMobile;
        const navData =
            {   menu0: '推荐',
                menu1: '热点',
                meun2: '国际',
                menu3: '科技',
                menu4: '娱乐',
                menu5: '财经',
                menu6:  "军事",
                menu7:  "游戏",
                menu8:  "有趣",
                menu9:  "图片",
                menu10:  "视频",
                menu11:  "体育",
                menu12:  "电影",
                menu13:  "动漫",
                menu14:  "汽车",
                menu15:  "生活",
                menu16:  "文化",
            };
        const navChildren = Object.keys(navData)
            .map((key, i) => {
                return (<Item key={i} onClick={() => this.updateChannel(navData[key])}><Link to={"/"}>{navData[key]}</Link></Item>)
            });
        // 频道排序，用于显示点击后的样式
        const channelOrder = this.props.state.index.channelOrder;
        return (<TweenOne
            component="header"
            animation={{ opacity: 0, type: 'from' }}
            {...props}
        >
            {/*<TweenOne
                className={`${this.props.className}-logo`}
                animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                id={`${this.props.id}-logo`}
            >
                <Link to="/">
                    <img width="100%" src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg" />
                </Link>
            </TweenOne>*/}
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
                        defaultSelectedKeys={['0']}
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
                <Row>
                    <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={3}></Col>
                    <Col xs={24} sm={24} md={24} lg={18} xl={18} xxl={18}>
                        <Menu
                            mode="horizontal" defaultSelectedKeys={['0']}
                            id={`${this.props.id}-menu`}
                            style={{borderBottom: "1px solid #e8e8e8"}}
                            selectedKeys={[channelOrder]}>
                            {navChildren}
                        </Menu>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={3}></Col>
                </Row>
            </TweenOne>)}
        </TweenOne>);
    }
}

Nav02.propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.object,
    id: PropTypes.string,
};

Nav02.defaultProps = {
    className: 'header1',
};

export default connect(
    state => ({
        state: state
    }),
    {updateChannelAndLoadData: updateChannelAndLoadData}
)(Nav02);