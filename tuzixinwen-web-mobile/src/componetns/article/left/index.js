import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import moment from "moment";
import 'moment/locale/zh-cn';

import './index.css';
import Axios from "../../../axios/axios";
import {openNotificationWithIcon} from "../../notification";
/**
 * @Author: miansen
 * @Date: 2018/12/6
 * @description: 文章详情页-左边
 */
class ArticleDetail extends Component{
    constructor (props) {
        super(props);
        this.state = {
            article: [],
            user: []
        }
    }
    componentWillMount(){
        const id = this.props.id;
        Axios.get("/article/"+id).then(({data}) => {
            if(data.code === 200){
                this.setState({
                    article: data.detail,
                    user: data.detail.user
                });
            }else{
                {openNotificationWithIcon("error","Error",data.description)}
            }
        }).catch( error => {
            {openNotificationWithIcon("error","Error",error.message)}
        })
    }
    render() {
        // const {abc} = this.props.article;
        // console.log("abc: "+abc)
        // console.log(this.state.article)
        // const user = this.state.article.user
        // console.log(user)
        return (
            <div className="article-content">
                <div className="mt-20 hidden-xs"></div>
                <div className="wrap-left">
                    <div className="article-wrap">
                        <h1 className="t-h1">{this.state.article.title}</h1>
                        <div className="mt-20 hidden-xs"></div>
                        <div className="pull-left">
                            <ul className="pull-left list-inline text-muted">
                                <li className="post-opt">
                                    <img className="avatar-36"
                                         src={this.state.user.avatar}/>
                                    &nbsp;                                <Link to={"/user/"+this.state.article.author}>{this.state.article.author}</Link>
                                    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                                    <span className="article-time article-createDate">{moment(this.state.article.createDate).format('YYYY-DD-MM h:mm:ss')}</span>
                                    <span className="theme"><Link to={"/theme/"+this.state.article.themeName}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.article.themeName}</Link></span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-20 hidden-xs"></div>
                        <p className="ellipsis mt-10 mb-15">
                            原文: <a target="_blank" href={this.state.article.articleUrl}>{this.state.article.articleUrl}</a>
                        </p>
                    </div>
                    <div className="article-body markdown-body" dangerouslySetInnerHTML={{__html: this.state.article.content}}>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleDetail;