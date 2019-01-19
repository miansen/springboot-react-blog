import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import moment from "moment";

import './index.css';
import Axios from "../../../../axios/axios";
import {openNotificationWithIcon} from "../../../notification";

/**
 * @Author: miansen
 * @Date: 2018/12/16
 * @description: 24小时
 */
class Hours24 extends Component{
    constructor (props) {
        super(props);
        this.state = {
            article: []
        }
    }

    componentWillMount(){
        if(this.state.article.length === 0){
            Axios.get("/articles/24news").then(({data}) => {
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
            <div className="24Hours-struct bui-box">
                <div className="bui-box">
                    {
                        this.state.article.length > 0 ?
                            <div className="pane-module">
                                <div className="column-wrap"><span>24小时</span></div>
                                <div className="home__right home-daily">
                                    <div className="home-daily__container" id="js-daily-container">
                                        <div className="home-daily__items">
                                            <div className="home-daily__border"></div>
                                            {
                                                this.state.article.map(function (v,i) {
                                                    return (
                                                        <div className="home-daily__item" key={i}>
                                                            {
                                                                v.showContent ?
                                                                    <Link alt={v.title}
                                                                          className="u-main-title home-daily__title js-open-modal"
                                                                          data-remote="true"
                                                                          target="_blank"
                                                                          to={"/article/"+v.articleId}>{v.title}
                                                                    </Link>
                                                                    :
                                                                    <a alt={v.title}
                                                                       className="u-main-title home-daily__title js-open-modal"
                                                                       data-remote="true"
                                                                       href={v.articleUrl}
                                                                       target="_blank">{v.title}
                                                                    </a>
                                                            }
                                                            <div className="daily-inline__footer">
                                                                <time className="daily-inline__link js-time-ago"
                                                                      dateTime={moment(v.createDate).fromNow()}
                                                                      title={moment(v.createDate).fromNow()}>{moment(v.createDate).fromNow()}
                                                                </time>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        );
    }
}

export default Hours24;