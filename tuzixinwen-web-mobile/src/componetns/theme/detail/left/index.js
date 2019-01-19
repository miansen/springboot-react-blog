import React, { Component } from 'react';
import {connect} from 'react-redux';
import InfiniteScroll from "react-infinite-scroller";

import Loading from "../../../loading";
import './index.css';
import {themeLoadData,themeLoadMore} from '../../../../redux/theme/action';
import ArticleItem from './articleItem';
import {Alert} from "antd";

/**
 * @Author: miansen
 * @Date: 2018/11/30
 * @description: 主题详情页-左边
 */
class ThemeDetailLeft extends Component{

    //在渲染前调用，加载第一页的文章数据
    componentWillMount(){
        this.props.themeLoadData({url: "/theme/articles",themeName: this.props.themeName,pageNo: 1});
    }

    //加载下一页的文章数据
    loadMore(){
        this.props.themeLoadMore({url:"/theme/articles",themeName: this.props.themeName,pageNo:this.props.state.theme.pageNo});
    }

    render() {
        return (
            <div className="article-struct bui-box">
                <div className="mod-info-flow">
                    <ul className="module-content article-list">
                        <InfiniteScroll
                            pageStart={1}
                            hasMore={this.props.state.theme.hasMore}
                            loader={<Loading key={1}/>}
                            loadMore={this.loadMore.bind(this)}>
                            <ArticleItem article={this.props.state.theme.article}/>
                        </InfiniteScroll>
                    </ul>
                    {
                        this.props.state.theme.loading
                            ? <Loading />
                            : null
                    }
                    {
                        !this.props.state.theme.hasMore && !this.props.state.theme.loading
                            ? <Alert className="load-more" message="没有更多数据了" type="error" />
                            : null
                    }
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        state: state
    }),
    {themeLoadData: themeLoadData,themeLoadMore: themeLoadMore}
)(ThemeDetailLeft);