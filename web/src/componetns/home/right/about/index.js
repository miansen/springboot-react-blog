import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './index.css';

/**
 * @Author: miansen
 * @Date: 2018/12/16
 * @description: 关于
 */
class About extends Component{
    render() {
        return (
            <div className="about-struct bui-box">
                <div className="bui-box">
                    <div className="pane-module">
                        <div className="column-wrap"><span>关于</span></div>
                        <ul className="module-content about-list">
                            <li className="item"><Link to="/about">关于我们</Link></li>
                            <li className="item"><Link to="/about">联系我们</Link></li>
                            <li className="item"><Link to="/about">免责声明</Link></li>
                        </ul>
                        <div className="company">
                            <p className="J-company-name"> © 2018 兔子新闻</p>
                            <div>
                                <a href="http://www.miibeian.gov.cn/" target="_blank" ga_event="click_about">琼ICP备18002390号-5</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;