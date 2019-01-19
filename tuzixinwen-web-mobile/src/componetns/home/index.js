import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row, Col, Alert} from 'antd';

import Channel from '../channel/index';
import ArticleList from './left/index';
import './index.css';

/**
 * @Author: miansen
 * @Date: 2018/11/30
 * @description: 首页
 */
class IndexHome extends Component{
    constructor (props) {
        super(props);
        this.state = {
            show: "none"
        }
    }

    /*alert = (channelName) => {
        var that = this;
        if(this.timer){
            clearTimeout(this.timer);
        }
        if (channelName === '推荐') {
            that.setState({
                show: ""
            });
            this.timer = setTimeout(()=>{
                that.setState({
                    show: "none"
                });
            },3000);
        }
    }*/

    render() {
        // const pathname = this.props.location.pathname;
        // console.log("home当前路由："+pathname)
        const channelName = this.props.state.index.channelName === "推荐" ? null : this.props.state.index.channelName;
        return (
            <div className="content">
                <Channel/>
                {/*<Alert message="为你推荐了20篇文章" type="info" className="myalert"
                       style={{top: "2.9rem",border: "0px",textAlign: "center",display: this.state.show}}/>*/}
                <div className="hidden-xs mb-40"></div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={15} xl={15} xxl={15}>
                        <div className="wrap-left pull-left">
                            <ArticleList/>
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}></Col>
                    <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}></Col>
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