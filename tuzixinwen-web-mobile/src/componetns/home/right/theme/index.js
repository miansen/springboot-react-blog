import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './index.css';
import Loading from "../../../loading";
import Axios from '../../../../axios/axios';
import {openNotificationWithIcon} from '../../../notification/index';
import DefaultAvatar from '../../../../assets/images/default-avatar.jpg';

/**
 * @Author: miansen
 * @Date: 2018/11/27
 * @description: 首页右边内容之一，推荐作者
 */
class Theme extends Component{

    constructor (props) {
        super(props);
        this.state = {
            user: [],
            loading:true
        }
    }

    componentWillMount(){
        if(this.state.user.length === 0 || this.state.loading){
            Axios.get("/user/recommend").then(({data}) => {
                if(data.code === 200){
                    this.setState({
                        loading: false,
                        user: data.detail
                    });
                }else{
                    {openNotificationWithIcon("error","Error",data.description)}
                }
            }).catch(error => {
                {openNotificationWithIcon("error","Error",error.message)}
            })
        }
    }

    render() {
        return (
            <div className="theme-struct bui-box">
                <div className="bui-box">
                    {
                        this.state.user.length > 0 ?
                            <div className="pane-module">
                                <div className="column-wrap"><span>推荐作者</span></div>
                                <ul className="module-content article-list">
                                    {
                                        this.state.user.map(function (v,i) {
                                            return (
                                                <li className="article-item" key={i}>
                                                    <Link className="doc style-small-image style-content-middle item-0 " to={v.userUrl ? v.userUrl : "/user/"+v.username}>
                                                        <div className="doc-image-small-wrapper">
                                                            <img className="doc-image-small"
                                                                 src={v.avatar ? v.avatar : DefaultAvatar} alt=""/>
                                                        </div>
                                                        <div className="doc-content">
                                                            <div className="doc-content-inline">
                                                                <div className="doc-title">{v.username}</div>
                                                                <div className="doc-info">
                                                                    <div className="summary">{v.signature}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
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

export default Theme;