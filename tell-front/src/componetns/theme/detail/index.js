import React, { Component } from 'react';
import {Row,Col} from 'antd';

import ThemeDetailLeft from './left/index';

/**
 * @Author: miansen
 * @Date: 2018/11/30
 * @description: 主题详情页
 */
class ThemeDetailHome extends Component{
    render() {
        return (
            <div className="content">
                <Row>
                    <div className="column-title">
                        <div className="column-wrap">
                            <span>{this.props.match.params.themeName}</span>
                        </div>
                    </div>
                    <Col xs={24} sm={24} md={24} lg={15} xl={15} xxl={15}>
                        <div className="wrap-left pull-left">
                            <ThemeDetailLeft themeName={this.props.match.params.themeName}/>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={2} xl={2} xxl={2}></Col>
                    <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}></Col>
                </Row>
            </div>
        );
    }
}

export default ThemeDetailHome;