import React,{Component} from 'react';
import { enquireScreen } from 'enquire-js';

import Nav from './nav/index';
import './index.css';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
// console.log("是否为移动设备:"+isMobile);
export default class Header extends Component {
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
        const children = [
            <Nav id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile}/>
        ];
        return (
            <div className="basic-header">
                <div className="templates-wrapper basic-header">{this.state.show && children}</div>
            </div>
        );
    }
}
