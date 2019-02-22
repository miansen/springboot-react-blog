import React, { Component } from 'react';
import { Carousel } from 'antd';

import './index.css';
import Axios from "../../axios/axios";
import {openNotificationWithIcon} from "../notification";
import {Link} from "react-router-dom";
/**
 * @Author: miansen
 * @Date: 2018/12/17
 * @description: 一级banner
 */
class Banner3 extends Component{
    constructor (props) {
        super(props);
        this.state = {
            article: []
        }
    }

    /**
     * pageNo: 起始值
     * pageSize: 总量值
     */
    componentWillMount(){
        if(this.state.article.length === 0){
            Axios.get("/articles/hot",{
                params: {
                    pageNo: 1,
                    pageSize: 5
                }
            }).then(({data}) => {
                if(data.code === 200){
                    this.setState({
                        article: data.detail.content
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
            <div className="banner1">
                <Carousel autoplay>
                    {
                        this.state.article.map(function (v,i) {
                            return (
                                <div className="big-slider-item" key={i}>
                                    {
                                        v.showContent ?
                                            <Link to={"/article/"+v.articleId} target="_blank">
                                                <img className="big-slider-img"
                                                     src={v.avatar} alt=""/>
                                                <i className="mask"></i>
                                                <div className="title">{v.title}</div>
                                            </Link>

                                            :

                                            <a href={v.articleUrl} target="_blank">
                                                <img className="big-slider-img"
                                                     src={v.avatar} alt=""/>
                                                <i className="mask"></i>
                                                <div className="title">{v.title}</div>
                                            </a>
                                    }
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        );
    }
}

export default Banner3;