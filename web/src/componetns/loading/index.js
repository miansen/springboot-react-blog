import React, { Component } from 'react';
import {Spin,Icon} from 'antd';
import './index.css';

/**
 * @Author: miansen
 * @Date: 2018/11/27
 * @description: 加载中
 */
class Loading extends Component{
    render() {
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        return (
            <div className="loading">
                <Spin indicator={antIcon} size="large"/>
            </div>
        );
    }
}

export default Loading;