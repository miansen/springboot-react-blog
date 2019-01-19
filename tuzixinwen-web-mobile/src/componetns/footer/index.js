import React, { Component } from 'react';
import {Layout} from 'antd';
import './index.css';
import {Link} from "react-router-dom";

/**
 * @Author: miansen
 * @Date: 2018/11/27
 * @description: 页脚
 */
class Footer extends Component{
    render() {
        const { Footer } = Layout;
        return (
            <Footer style={{textAlign: 'center'}}>
                <Link to="/about">关于我们</Link>
                <span className="span-line">|</span>
                <Link to="/about">联系我们</Link>
                <span className="span-line">|</span>
                <Link to="/about">免责声明</Link>
            </Footer>
        );
    }
}

export default Footer;