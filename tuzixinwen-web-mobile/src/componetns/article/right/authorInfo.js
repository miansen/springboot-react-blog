import React, { Component } from 'react';

import './index.css';
/**
 * @Author: miansen
 * @Date: 2018/12/7
 * @description: 作者信息
 */
class AuthorInfo extends Component{
    render() {
        const {user} = this.props.user;
        console.log("user: "+user)
        return (
            <div className="author-info-struct bui-box">
            <div className="column-title">
                <div className="column-wrap">
                    <span>作者</span>
                </div>
            </div>
            <div className="box-author-info">
                <div className="author-face">
                    <a href="/member/2415798.html" target="_blank">
                        <img src="https://img.huxiucdn.com/auth/data/avatar/001/97/61/34_1542452399.jpg?imageView2/1/w/200/h/200/|imageMogr2/strip/interlace/1/quality/85/format/jpg"
                             className="author-face-img"/>
                    </a>
                </div>
                <div className="author-name">
                    <a href="/member/2415798.html" target="_blank">
                        大梦Eden© </a>
                    <a href="/vip" target="_blank"></a>
                </div>
                <div className="author-one"></div>
                <div className="author-one"></div>
                <div className="author-article-pl">
                    <ul>
                        <li><a href="/member/2415798/article.html" target="_blank">1篇文章</a></li>
                    </ul>
                </div>
            </div>
            </div>
        );
    }
}

export default AuthorInfo;