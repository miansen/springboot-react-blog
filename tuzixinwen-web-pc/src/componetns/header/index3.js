import React, { Component } from 'react';
import { Layout } from 'antd';
import {enquireScreen} from "enquire-js";

import Nav02 from './nav/Nav02';

const { Header } = Layout;
let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
class Herader03 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: true
        };
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });


    }
    render() {
        return (
            <Header className="fixed-header" style={{ position: 'fixed', zIndex: 1, width: '100%', background: "#ffffff"}}>
                <Nav02 id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile} style={{borderBottom: "1px solid rgb(232, 232, 232)"}}/>
            </Header>
        );
    }
}

export default Herader03;