import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from "../../../axios/axios";
import {openNotificationWithIcon} from "../../notification";

/**
 * @Author: miansen
 * @Date: 2018/12/7
 * @description: 作者其他文章
 */
class AuthorOtherArticle extends Component{
    constructor (props) {
        super(props);
        this.state = {
            article: [],
            user: this.props.user,
            id: this.props.id
        }
    }

    componentDidMount (){
        if(this.state.article.length === 0){
            Axios.get("/article/author/other",{
                params: {
                    author: this.state.user,
                    currentArticleId: this.state.id
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
        //console.log("AuthorOtherArticle（子组件）："+this.props.user)
        console.log("AuthorOtherArticle（子组件）："+this.state.user)
        console.log("AuthorOtherArticle（子组件）："+this.state.id)
        return (
            <div className="author-other-article-struct bui-box">
                <div className="bui-box">
                    <div className="mt-10 hidden-xs"></div>
                    {
                        this.state.article.length > 0 ?
                            <div className="pane-module">
                                {/*<div className="module-head">24小时热闻</div>*/}
                                <div className="column-wrap"><span>作者其他文章</span></div>
                                <ul className="module-content article-list">
                                    {
                                        this.state.article.map(function (v,i) {
                                            return (
                                                <li className="article-item" key={i}>
                                                    {
                                                        v.showContent ?
                                                            <Link to={"/article/"+v.articleId} target="_blank" className="news-link">
                                                                <div className="module-pic news-pic">
                                                                    <img src={v.avatar} lazy="loaded"/>
                                                                </div>
                                                                <div className="news-inner">
                                                                    <p className="module-title">{v.title}</p>
                                                                </div>
                                                            </Link>
                                                            :
                                                            <a href={v.articleUrl} target="_blank" className="news-link">
                                                                <div className="module-pic news-pic">
                                                                    <img src={v.avatar} lazy="loaded"/>
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

export default AuthorOtherArticle;