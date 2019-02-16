import React, { Component } from 'react';
import {Row, Col} from 'antd';

import Banner1 from './banner1';
import Banner2 from './banner2';
import Banner3 from './banner3';
import Hours24 from "../home/right/24hours";

class Banner extends Component{
    render() {
        return (
            <div className="banner">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                        <Banner3/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
                        <Banner2/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}>
                        <Hours24/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Banner;