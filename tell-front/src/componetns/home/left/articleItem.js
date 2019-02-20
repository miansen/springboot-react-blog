import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Icon} from 'antd';
import moment from "moment";
import 'moment/locale/zh-cn';
import Axios from "../../../axios/axios";
import {openNotificationWithIcon} from "../../notification";

class ArticleItem extends Component{

    handlerClickArticleId(id){
        Axios.get("/article/"+id)
            .then()
            .catch(error => {
                {openNotificationWithIcon("error","Error",error.message)}
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.article.map(function (v,i) {
                        return (
                            <li className="article-item" key={i}>
                                <div className="media article">
                                    <div className="media-left">
                                        {
                                            v.showContent ?
                                                <Link to={"/article/"+v.articleId} target="_blank" onClick={this.handlerClickArticleId.bind(this,v.articleId)}>
                                                    <img src={v.avatar} className="avatar img-circle" alt=""/>
                                                </Link>
                                                :
                                                <a href={v.articleUrl} target="_blank" onClick={this.handlerClickArticleId.bind(this,v.articleId)}>
                                                    <img src={v.avatar} className="avatar img-circle" alt=""/>
                                                </a>
                                        }
                                    </div>
                                    <div className="media-body">
                                        <div className="title">
                                            {
                                                v.showContent ?
                                                    <Link to={"/article/"+v.articleId} target="_blank">{v.title}</Link>
                                                    :
                                                    <a href={v.articleUrl} target="_blank" onClick={this.handlerClickArticleId.bind(this,v.articleId)}>{v.title}</a>
                                            }
                                        </div>
                                        {
                                            v.excerpt != null && v.excerpt.length > 0 && v.excerpt != 'None' ?
                                                <div className="excerpt"><span>{v.excerpt}</span></div>
                                                :
                                                null
                                        }
                                        <div className="tip">
                                            <p className="gray">
                                                {
                                                    v.siteName != null && v.siteName.length > 0 && v.siteName != 'None' ?
                                                        <Link to={"/site/" + v.siteName}><span className="label label-primary">{v.siteName}</span></Link>
                                                    :
                                                    null
                                                }
                                                {
                                                    v.siteName != null && v.siteName.length > 0 && v.siteName != 'None' ?
                                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                        :
                                                        null
                                                }
                                                {
                                                    v.author.length > 0 && v.author != 'None' ?
                                                        <Link to={"/user/" + v.user.username} target="_blank" className="author-media-avatar">
                                                            <img src={v.user.avatar} alt=""/>
                                                        </Link>
                                                        :
                                                        null
                                                }
                                                {
                                                    v.author.length > 0  && v.author != 'None' ?
                                                        <Link to={"/user/" + v.user.username}><span className="author-name">{v.user.username}</span></Link>
                                                        :
                                                        null
                                                }
                                                {
                                                    v.author.length > 0  && v.author != 'None' ?
                                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                        :
                                                        null
                                                }
                                                {
                                                    v.themeName.length > 0  && v.themeName != 'None' ?
                                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                        :
                                                        null
                                                }
                                                {
                                                    v.themeName.length > 0  && v.themeName != 'None' ?
                                                        <Link to={"/theme/" + v.themeName}><span className="label article-theme">{v.themeName}</span></Link>
                                                        :
                                                        null
                                                }
                                                <Link to="#"><Icon type="like" /></Link>
                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                <Link to={"/article/"+v.articleId} target="_blank" className="comment"><Icon type="message" /></Link>
                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                <span>{moment(v.createDate).fromNow()}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    }.bind(this))
                }
            </div>
        );
    }
}

export default ArticleItem;