import React, { Component } from 'react';
import {Row, Col} from 'antd';

import SiteDetailLeft from './left/index';

/**
 * @Author: miansen
 * @Date: 2018/11/30
 * @description: 站点详情页
 */
class SiteDetailHome extends Component{

    render() {
        return (
            <div className="content">
                <Row>
                    <div className="column-title">
                        <div className="column-wrap">
                            <span>{this.props.match.params.siteName}</span>
                        </div>
                    </div>
                    <Col xs={24} sm={24} md={24} lg={15} xl={15} xxl={15}>
                        <div className="wrap-left pull-left">
                            <SiteDetailLeft siteName={this.props.match.params.siteName}/>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={2} xl={2} xxl={2}></Col>
                    <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}></Col>
                </Row>
            </div>
        );
    }
}

export default (SiteDetailHome);