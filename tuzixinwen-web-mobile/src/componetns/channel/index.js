import React, { Component } from 'react';
import {connect} from 'react-redux';

import './index.css';
import {updateChannelAndLoadData} from '../../redux/index/action';

/**
 * @Author: miansen
 * @Date: 2018/11/29
 * @description: 频道列表
 */
class Channel extends Component{
    //更新频道
    updateChannel(channelName,len){
        //点击频道改变滚轮的位置
        document.getElementById('fixed').scrollLeft = len;
        const data = {
            url: "/channel/articles",
            channelName: channelName,
            pageNo:1

        }
        this.props.updateChannelAndLoadData(data);
    }
    render() {
        // 当前点击的频道
        const channelOrder = this.props.state.index.channelOrder;
        return (
            <div data-v-17e64bac="" className="channel-nav bottom-1px" id="fixedaa">
                <a data-v-17e64bac="" className="down clickable"></a>
                <div data-v-17e64bac="" className="list" id="fixed" ref="findGoal">
                    <div data-v-17e64bac="" className={channelOrder === '0' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("推荐")}>推荐</div>
                    <div data-v-17e64bac="" className={channelOrder === '1' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("热点")}>热点</div>
                    <div data-v-17e64bac="" className={channelOrder === '2' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("国际")}>国际</div>
                    <div data-v-17e64bac="" className={channelOrder === '3' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("科技")}>科技</div>
                    <div data-v-17e64bac="" className={channelOrder === '4' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("娱乐",25)}>娱乐</div>
                    <div data-v-17e64bac="" className={channelOrder === '5' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("财经",70)}>财经</div>
                    <div data-v-17e64bac="" className={channelOrder === '6' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("军事",115)}>军事</div>
                    <div data-v-17e64bac="" className={channelOrder === '7' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("游戏",160)}>游戏</div>
                    <div data-v-17e64bac="" className={channelOrder === '8' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("有趣",205)}>有趣</div>
                    <div data-v-17e64bac="" className={channelOrder === '9' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("图片",250)}>图片</div>
                    <div data-v-17e64bac="" className={channelOrder === '10' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("视频",290)}>视频</div>
                    <div data-v-17e64bac="" className={channelOrder === '11' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("体育",340)}>体育</div>
                    <div data-v-17e64bac="" className={channelOrder === '12' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("电影",380)}>电影</div>
                    <div data-v-17e64bac="" className={channelOrder === '13' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("动漫",430)}>动漫</div>
                    <div data-v-17e64bac="" className={channelOrder === '14' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("汽车",450)}>汽车</div>
                    <div data-v-17e64bac="" className={channelOrder === '15' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("生活",490)}>生活</div>
                    <div data-v-17e64bac="" className={channelOrder === '16' ? "tab clickable active" : "tab clickable"}
                         onClick={() => this.updateChannel("文化",530)}>文化</div>
                </div>
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