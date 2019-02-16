import
{
    INDEX_LOAD_DATA_START,
    INDEX_LOAD_DATA_FINISH,
    INDEX_LOAD_MORE_START,
    INDEX_LOAD_MORE_FINISH,
    INDEX_LOAD_CHANNEL_DATA,
    UPDATE_CHANNEL
} from './action-type'
import Axios from "../../axios/axios";
import {openNotificationWithIcon} from "../../componetns/notification";

//开始加载第一页的数据
export const indexLoadDataStart = () => ({type: INDEX_LOAD_DATA_START});

//第一页的数据加载完毕
export const indexLoadDataFinish = (data) => ({type: INDEX_LOAD_DATA_FINISH,data: data});

//开始加载下一页的数据
export const indexLoadMoreStart = () => ({type: INDEX_LOAD_MORE_START});

//下一页的数据加载完毕
export const indexLoadMoreFinish = (data) => ({type: INDEX_LOAD_MORE_FINISH,data: data});

//加载频道信息
export const indexLoadChannelData = (data) => ({type: INDEX_LOAD_CHANNEL_DATA,data: data})

//切换频道
export const updateChannel = (channelName) => ({type: UPDATE_CHANNEL,data: channelName});

//加载第一页的数据
export const indexLoadData = (data) => {
    return dispatch => {
        dispatch(indexLoadDataStart());
        fetchData(data.url,data.channelName,data.pageNo,dispatch);
    }
}

//加载下一页的数据
export const indexLoadMore = (data) => {
    return dispatch => {
        dispatch(indexLoadMoreStart());
        fetchMoreData(data.url,data.channelName,data.pageNo,dispatch);
    }
}

//切换频道并加载相应的数据
export const updateChannelAndLoadData = (data) => {
    return dispatch => {
        dispatch(updateChannel(data.channelName))
        fetchData(data.url,data.channelName,data.pageNo,dispatch);
        fetchChannel(data.channelName,dispatch); //加载频道的信息
    }
}

function fetchData(url,channelName,pageNo,dispatch){
    Axios.get(url,{
        params: {
            channelName: channelName === "推荐" ? null: channelName,
            pageNo: pageNo
        }
    }).then(({data}) => {
        if(data.code === 200){
            dispatch(indexLoadDataFinish(
                {
                    hasMore: !data.detail.last,
                    pageNo: pageNo + 1,
                    article: data.detail.content,
                }
            ))
        }else{
            {openNotificationWithIcon("error","Error",data.description)}
        }
    }).catch(error => {
        {openNotificationWithIcon("error","Error",error.message)}
    })
}

function fetchMoreData(url,channelName,pageNo,dispatch){
    Axios.get(url,{
        params: {
            channelName: channelName === "推荐" ? null: channelName,
            pageNo: pageNo
        }
    }).then(({data}) => {
        if(data.code === 200){
            dispatch(indexLoadMoreFinish(
                {
                    hasMore: !data.detail.last,
                    pageNo: pageNo + 1,
                    article: data.detail.content,
                }
            ))
        }else{
            {openNotificationWithIcon("error","Error",data.description)}
        }
    }).catch(error => {
        {openNotificationWithIcon("error","Error",error.message)}
    })
}

//获取频道的信息
function fetchChannel(channelName,dispatch){
    Axios.get('/channels/'+channelName).then(({data}) => {
        if(data.code === 200){
            dispatch(indexLoadChannelData(
                {
                    channelOrder: data.detail.channelOrder
                }
            ))
        }else {
            {openNotificationWithIcon("error","Error",data.description)}
        }
    }).catch( error => {
        {openNotificationWithIcon("error","Error",error.message)}
    })
}