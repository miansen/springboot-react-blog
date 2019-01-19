import React, { Component } from 'react';
import {Row,Col} from 'antd';

import ArticleDetail from './left/index';
import AuthorInfo from './right/authorInfo';
import AuthorOtherArticle from './right/authorOtherArticle';
import HotArticle from './right/hotArticle';
import Axios from "../../axios/axios";
import {openNotificationWithIcon} from "../notification";
/**
 * @Author: miansen
 * @Date: 2018/12/6
 * @description: 文章详情页
 */
class ArticleHome extends Component{
    constructor (props) {
        super(props);
        this.state = {
            article: [],
            user: []
        }
    }
    componentDidMount (){
        const id = this.props.match.params.id;
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
        // console.log(this.state.article)
        // console.log("ArticleHome（父组件）: "+this.state.user)
        const article = this.state.article;
        return (
           <Row>
               <Col xs={0} sm={0} md={0} lg={1} xl={1} xxl={1}></Col>
               <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
                   <div className="wrap-left pull-left">
                       <ArticleDetail id={this.props.match.params.id} article={this.state.article}/>
                   </div>
               </Col>
               <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}></Col>
               <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}>
                   <div className="wrap-right pull-right">
                       {/*<AuthorInfo user={this.state.user}/>*/}
                       {/*<AuthorOtherArticle user={this.state.user} id={this.props.match.params.id}/>*/}
                       {/*<HotArticle/>*/}
                   </div>
               </Col>
           </Row>
        );
    }
}

export default ArticleHome;