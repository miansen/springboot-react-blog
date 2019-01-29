import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './index.css';
import Axios from '../../../../axios/axios';
import {openNotificationWithIcon} from '../../../notification/index';

/**
 * @Author: miansen
 * @Date: 2018/11/27
 * @description: 首页右边内容之一，热门新闻
 */
class News extends Component{

    constructor (props) {
        super(props);
        this.state = {
            article: []
        }
    }

    componentWillMount(){
        if(this.state.article.length === 0){
            Axios.get("/articles/hot",{
                params: {
                    pageNo: 7,
                    pageSize: 5
                }
            }).then(({data}) => {
                if(data.code === 200){
                    this.setState({
                        article: data.detail
                    });
                }else{
                    {openNotificationWithIcon("error","Error",data.description)}
                }
            }).catch( error => {
                {openNotificationWithIcon("error","Error",error.message)}
            })
        }
    }

    render() {
        return (
            <div className="news-struct bui-box">
                <div className="bui-box">
                    {
                        this.state.article.length > 0 ?
                            <div className="pane-module">
                                <div className="column-wrap"><span>热门文章</span></div>
                                <ul className="module-content article-list">
                                    {
                                        this.state.article.map(function (v,i) {
                                            return (
                                                <li className="article-item" key={i}>
                                                    {
                                                        v.showContent ?
                                                            <Link to={"/article/"+v.articleId} target="_blank" className="news-link">
                                                                <div className="module-pic news-pic">
                                                                    <img src={v.avatar} lazy="loaded" alt=""/>
                                                                </div>
                                                                <div className="news-inner">
                                                                    <p className="module-title">{v.title}</p>
                                                                </div>
                                                            </Link>
                                                            :
                                                            <a href={v.articleUrl} target="_blank" className="news-link">
                                                                <div className="module-pic news-pic">
                                                                    <img src={v.avatar} lazy="loaded" alt=""/>
                                                                </div>
                                                                <div className="news-inner">
                                                                    <p className="module-title">{v.title}</p>
                                                                </div>
                                                            </a>
                                                    }
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        );
    }
}

export default News;