import React, { Component } from 'react';
import moment from "moment";
import {Link} from "react-router-dom";
import Axios from "../../../../axios/axios";
import {openNotificationWithIcon} from "../../../notification";

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
                                                <Link to={"/article/"+v.articleId}>
                                                    <img src={v.avatar} className="avatar img-circle" alt=""/>
                                                </Link>
                                                :
                                                <a href={v.articleUrl} onClick={this.handlerClickArticleId.bind(this,v.articleId)}>
                                                    <img src={v.avatar} className="avatar img-circle" alt=""/>
                                                </a>
                                        }
                                    </div>
                                    <div className="media-body">
                                        <div className="title">
                                            {
                                                v.showContent ?
                                                    <Link to={"/article/"+v.articleId}>{v.title}</Link>
                                                    :
                                                    <a href={v.articleUrl} onClick={this.handlerClickArticleId.bind(this,v.articleId)}>{v.title}</a>
                                            }
                                        </div>
                                        {
                                            v.excerpt.length > 0 && v.excerpt != 'None' ?
                                                <div className="excerpt"><span>{v.excerpt}</span></div>
                                                :
                                                null
                                        }
                                        <div className="tip">
                                            <p className="gray">
                                                {
                                                    v.author.length > 0 && v.author != 'None' ?
                                                        <Link to={"/user/" + v.user.username} className="author-media-avatar">
                                                            <img src={v.user.avatar} alt=""/>
                                                        </Link>
                                                        :
                                                        null
                                                }
                                                {
                                                    v.author.length > 0 && v.author != 'None' ?
                                                        <Link to={"/user/" + v.user.username}><span className="label label-primary">{v.user.username}</span></Link>
                                                        :
                                                        null
                                                }
                                                {
                                                    v.author.length > 0 && v.author != 'None' ?
                                                        <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                                                        :
                                                        null
                                                }
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