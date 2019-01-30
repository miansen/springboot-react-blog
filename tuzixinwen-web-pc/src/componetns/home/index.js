import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'antd';

import Channel from '../channel/index';
import ArticleList from './left/index';
import Theme from './right/theme/index';
import News from './right/news/index';
import Images from './right/images/index';
import Banner from '../banner/index';
import About from './right/about/index';
import './index.css';

/**
 * @Author: miansen
 * @Date: 2018/11/30
 * @description: 首页
 */
class IndexHome extends Component{

    render() {
        // const pathname = this.props.location.pathname;
        // console.log("home当前路由："+pathname)
        const channelName = this.props.state.index.channelName === "推荐" ? null : this.props.state.index.channelName;
        return (
            <div className="content">
                {/*<Channel/>*/}
                {channelName ? null : <Banner/>}
                <Row>
                    <Col xs={24} sm={24} md={24} lg={15} xl={15} xxl={15}>
                        <div className="wrap-left pull-left">
                            <ArticleList/>
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}></Col>
                    <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}>
                        <div className="wrap-right pull-right">
                            <Theme/>
                            <News/>
                            <About/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect(
    state => ({
        state: state
    })
)(IndexHome);