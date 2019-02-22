import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'antd';

import ArticleList from './left/index';
import Theme from './right/theme/index';
import News from './right/news/index';
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
        return (
            <div className="content">
                <Banner/>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17}>
                        <div className="wrap-left pull-left">
                            <ArticleList/>
                        </div>
                    </Col>
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