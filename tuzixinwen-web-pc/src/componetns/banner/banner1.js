import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './index.css';
import {enquireScreen} from "enquire-js";
import Axios from "../../axios/axios";
import {openNotificationWithIcon} from "../notification";
const BgElement = Element.BgElement;

/**
 * @Author: miansen
 * @Date: 2018/11/28
 * @description: 自动轮播
 * API: https://motion.ant.design/api/banner-anim
 * duration：number 动画过场时间
 * arrow：boolean 默认箭头（点击箭头可以切换上一张或者下一张图片）
 * thumb：boolean 默认缩略图（点），点击缩略图可以切换到指定的图片
 * autoPlay：boolean 自动播放 默认false
 */

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

class AutoPlay extends Component{
    constructor (props) {
        super(props);
        this.state = {
            isMobile, //是否为移动设备
            article: []
        }
    }

    componentWillMount(){
        if(this.state.article.length === 0){
            Axios.get("/articles/hot",{
                params: {
                    pageNo: 0,
                    pageSize: 3
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

    /**
     * 装载完成
     * 所有的子组件都render完之后才可以调用
     * 通过 componentDidMount 方法设置轮播图的宽度
     */
    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });
    }

    render() {
        // console.log("是否为移动设备？"+isMobile);
        // const width = this.state.isMobile ? null : "690px";
        // style={{width: width}}
        return (
            <BannerAnim prefixCls="banner-user" autoPlay={true} duration={1500} arrow={false} >
                {
                    this.state.article.map(function (v,i) {
                        return (
                            <Element prefixCls="banner-user-elem" key={i}>
                                <BgElement key="bg" className="bg" style={{background: '#64CBCC',}}>
                                    {
                                        v.showContent ?
                                            <Link to={"/article/"+v.articleId} target="_blank">
                                                <img src={v.avatar} alt="" style={{width:"100%",height:"100%"}}/>
                                            </Link>

                                            :

                                            <a href={v.articleUrl} target="_blank">
                                                <img src={v.avatar} alt="" style={{width:"100%",height:"100%"}}/>
                                            </a>
                                    }
                                </BgElement>
                                <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                                    {v.title}
                                </TweenOne>
                            </Element>
                        )
                    })
                }
            </BannerAnim>
        );
    }
}

export default AutoPlay;