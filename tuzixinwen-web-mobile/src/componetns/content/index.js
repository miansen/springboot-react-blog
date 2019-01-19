import React, { Component } from 'react';
import {Layout,Row,Col} from 'antd';
import './index.css';

/**
 * @Author: miansen
 * @Date: 2018/11/27
 * @description: 页面中间内容区域
 */
class Content extends Component{
    render() {
        const {Content} = Layout;
        return (
            <Content style={{margin: '24px 0 0'}}>
                <Row>
                    <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={3}></Col>
                    <Col xs={24} sm={24} md={24} lg={18} xl={18} xxl={18}>
                        {this.props.children}
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={3}></Col>
                </Row>
            </Content>
        );
    }
}

export default Content;