import React, { Component } from 'react';

import './index.css';

/**
 * @Author: miansen
 * @Date: 2018/11/27
 * @description: 首页右边内容之一，精彩图片
 */
class Images extends Component{
    render() {
        return (
            <div className="images-struct bui-box">
                <div className="bui-box">
                    <div className="pane-module">
                        {/*<div className="module-head">精彩图片</div>*/}
                        <div className="column-wrap"><span>精彩图片</span></div>
                        <ul className="module-content bui-box picture-list">
                            <li className="bui-left picture-item">
                                <a href="/group/6605436900020847107/" target="_blank" className="link">
                                    <div className="module-pic picture-img">
                                        <img alt="" src="//p99.pstatp.com/list/300x170/pgc-image/153794631464660ef2fae32" lazy="loaded"/>
                                    </div>
                                    <p>不得不惊叹的粉彩瓷技艺！古代人的审美在今日也同样让人折服！</p>
                                </a>
                            </li>
                            <li className="bui-left picture-item">
                                <a href="/group/6605436900020847107/" target="_blank" className="link">
                                    <div className="module-pic picture-img">
                                        <img alt="" src="//p99.pstatp.com/list/300x170/pgc-image/153794631464660ef2fae32" lazy="loaded"/>
                                    </div>
                                    <p>不得不惊叹的粉彩瓷技艺！古代人的审美在今日也同样让人折服！</p>
                                </a>
                            </li>
                            <li className="bui-left picture-item">
                                <a href="/group/6605436900020847107/" target="_blank" className="link">
                                    <div className="module-pic picture-img">
                                        <img alt="" src="//p99.pstatp.com/list/300x170/pgc-image/153794631464660ef2fae32" lazy="loaded"/>
                                    </div>
                                    <p>不得不惊叹的粉彩瓷技艺！古代人的审美在今日也同样让人折服！</p>
                                </a>
                            </li>
                            <li className="bui-left picture-item">
                                <a href="/group/6605436900020847107/" target="_blank" className="link">
                                    <div className="module-pic picture-img">
                                        <img alt="" src="//p99.pstatp.com/list/300x170/pgc-image/153794631464660ef2fae32" lazy="loaded"/>
                                    </div>
                                    <p>不得不惊叹的粉彩瓷技艺！古代人的审美在今日也同样让人折服！</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Images;