import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from "../../axios/axios";
import {openNotificationWithIcon} from "../notification";

/**
 * @Author: miansen
 * @Date: 2018/12/19
 * @description: 二级banner
 */
class Banner2 extends Component{
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
                    pageNo: 5,
                    pageSize: 2
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
            <div className="banner2 small-slider">
                {
                    this.state.article.map(function (v,i) {
                        return (
                            <div className="small-slider-item" key={i}>
                                {
                                    v.showContent ?
                                        <Link to={"/article/"+v.articleId} target="_blank">
                                            <img className="small-slider-img"
                                                 src={v.avatar} alt=""/>
                                            <i className="mask"></i>
                                            <div className="title">{v.title}</div>
                                        </Link>

                                        :

                                        <a href={v.articleUrl} target="_blank">
                                            <img className="small-slider-img"
                                                 src={v.avatar} alt=""/>
                                            <i className="mask"></i>
                                            <div className="title">{v.title}</div>
                                        </a>
                                }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Banner2;