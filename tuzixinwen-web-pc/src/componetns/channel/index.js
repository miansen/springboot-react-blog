import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Menu} from 'antd';

import './index.css';
import Axios from '../../axios/axios';
import {openNotificationWithIcon} from "../notification";
import {updateChannelAndLoadData} from '../../redux/index/action';

/**
 * @Author: miansen
 * @Date: 2018/11/29
 * @description: 频道列表
 */
const Item = Menu.Item;
class Channel extends Component{

    constructor (props) {
        super(props);
        this.state = {
            channel: [],
            loading: true,  //是否显示加载中
            theme: "light " //导航菜单的主题颜色
        }
    }

    //渲染前加载
    /*componentWillMount(){
        this.fetchData();
    }*/

    //获取频道列表
    /*fetchData(){
        if(this.state.channel.length === 0 || this.state.loading){
            Axios.get('/channels').then(({data}) => {
                // console.log(data);
                if(data.code === 200){
                    this.setState({
                        loading: false,
                        channel: data.detail
                    })
                }else {
                    {openNotificationWithIcon("error","Error",data.description)}
                }
            }).catch( error => {
                {openNotificationWithIcon("error","Error",error.message)}
            })
        }
    }*/

    //更新频道
    updateChannel(channelName){
        const data = {
            url: "/channel/articles",
            channelName: channelName,
            pageNo:1

        }
        this.props.updateChannelAndLoadData(data);
    }

    render() {
        const navData =
            {   menu0: '推荐',
                menu1: '热点',
                meun2: '国际',
                menu3: '科技',
                menu4: '娱乐',
                menu5: '财经',
                menu6:  "军事",
                menu7:  "游戏",
                menu8:  "有趣",
                menu9:  "图片",
                menu10:  "视频",
                menu11:  "体育",
                menu12:  "电影",
                menu13:  "动漫",
                menu14:  "汽车",
                menu15:  "生活",
                menu16:  "文化",
            };
        const NavChannel = Object.keys(navData).map((key,i) => (
            <Item key={i} onClick={() => this.updateChannel(navData[key])}>{navData[key]}</Item>
        ))
        // 频道排序，用于显示点击后的样式
        const channelOrder = this.props.state.index.channelOrder;
        // console.log("channelOrder: "+channelOrder)
        return (
            <div className="channel-header">
                <Menu defaultSelectedKeys={['0']}
                      mode="horizontal"
                      theme={this.state.theme}
                      selectedKeys={[channelOrder]}>
                    {NavChannel}
                </Menu>
            </div>
        );
    }
}

export default connect(
    state => ({
        state: state
    }),
    {updateChannelAndLoadData: updateChannelAndLoadData}
)(Channel);