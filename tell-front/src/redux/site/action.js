import {
    SITE_LOAD_DATA_START,
    SITE_LOAD_DATA_FINISH,
    SITE_LOAD_MORE_START,
    SITE_LOAD_MORE_FINISH
} from './action-type';
import Axios from "../../axios/axios";
import {openNotificationWithIcon} from "../../componetns/notification/index";

export const siteLoadDataStart = () => ({type: SITE_LOAD_DATA_START});

export const siteLoadDataFinish = (data) => ({type: SITE_LOAD_DATA_FINISH,data: data});

export const siteLoadMoreStart = () => ({type: SITE_LOAD_MORE_START});

export const siteLoadMoreFinish = (data) => ({type: SITE_LOAD_MORE_FINISH,data: data});

export const siteLoadData = (data) => {
    return dispatch => {
        dispatch(siteLoadDataStart());
        fetchData(data.url,data.siteName,data.pageNo,dispatch);
    }
}

export const siteLoadMore = (data) => {
    return dispatch => {
        dispatch(siteLoadMoreStart());
        fetchMoreData(data.url,data.siteName,data.pageNo,dispatch);
    }
}


function fetchData(url,siteName,pageNo,dispatch){
    // console.log("fetchData---url : "+url+"?pageNo="+pageNo);
    Axios.get(url,{
        params: {
            siteName: siteName,
            pageNo: pageNo
        }
    }).then(({data}) => {
        if(data.code === 200){
            dispatch(siteLoadDataFinish(
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

function fetchMoreData(url,siteName,pageNo,dispatch){
    // console.log("fetchMoreData---url : "+url+"?pageNo="+pageNo);
    Axios.get(url,{
        params: {
            siteName: siteName,
            pageNo: pageNo
        }
    }).then(({data}) => {
        if(data.code === 200){
            dispatch(siteLoadMoreFinish(
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