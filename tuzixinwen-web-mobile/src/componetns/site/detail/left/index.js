import React, { Component } from 'react';
import {connect} from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import {Alert} from "antd";

import Loading from "../../../loading";
import ArticleItem from './articleItem';
import {siteLoadData,siteLoadMore} from '../../../../redux/site/action';


/**
 * @Author: miansen
 * @Date: 2018/11/30
 * @description: 站点详情页-左边
 */
class SiteDetailLeft extends Component{

    //在渲染前调用
    componentWillMount(){
        this.props.siteLoadData({url: "/site/articles",siteName: this.props.siteName,pageNo: 1});
    }

    loadMore(){
        this.props.siteLoadMore({url:"/site/articles",siteName: this.props.siteName,pageNo:this.props.state.site.pageNo});
    }

    render() {
        return (
            <div className="article-struct bui-box">
                <div className="mod-info-flow">
                    <ul className="module-content article-list">
                        <InfiniteScroll
                            pageStart={1}
                            hasMore={this.props.state.site.hasMore}
                            loader={<Loading key={1}/>}
                            loadMore={this.loadMore.bind(this)}>
                            <ArticleItem article={this.props.state.site.article}/>
                        </InfiniteScroll>
                    </ul>
                    {
                        this.props.state.site.loading
                            ? <Loading />
                            : null
                    }
                    {
                        !this.props.state.site.hasMore && !this.props.state.site.loading
                            ? <Alert className="load-more" message="没有更多数据了" type="error" />
                            : null
                    }
                </div>
            </div>
        );
    }
}

export default connect( state => ({
    state: state
    }),
    {siteLoadData: siteLoadData,siteLoadMore: siteLoadMore}
)(SiteDetailLeft);