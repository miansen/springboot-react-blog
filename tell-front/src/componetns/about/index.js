import React, { Component } from 'react';

import './index.css';

/**
 * @Author: miansen
 * @Date: 2018/12/16
 * @description: 关于
 */
class About extends Component{
    render() {
        return (
            <div className="about">
                <h3 className="mb-25">关于TELL</h3>
                <p>TELL使用SpringBoot、React和MySQL开发的社区系统</p>
            </div>
        );
    }
}

export default About;