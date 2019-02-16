import {
    THEME_LOAD_DATA_START,
    THEME_LOAD_DATA_FINISH,
    THEME_LOAD_MORE_START,
    THEME_LOAD_MORE_FINISH
} from './action-type';
import Axios from "../../axios/axios";
import {openNotificationWithIcon} from "../../componetns/notification";

//开始加载第一页的文章数据
const themeLoadDataStart = () => ({type: THEME_LOAD_DATA_START});

//第一页的文章数据加载完毕
const themeLoadDataFinish = (data) => ({type: THEME_LOAD_DATA_FINISH,data: data});

//开始加载下一页的文章数据
const themeLoadMoreStart = () => ({type: THEME_LOAD_MORE_START});

//下一页的文章数据加载完毕
const themeLoadMoreFinish = (data) => ({type: THEME_LOAD_MORE_FINISH,data: data});

//加载第一页的数据
export const themeLoadData = (data) => {
    return dispatch => {
        dispatch(themeLoadDataStart());
        fetchData(data.url,data.themeName,data.pageNo,dispatch);
    }
}

//加载下一页的数据
export const themeLoadMore = (data) => {
    return dispatch => {
        dispatch(themeLoadMoreStart());
        fetchMoreData(data.url,data.themeName,data.pageNo,dispatch);
    }
}

function fetchData(url,themeName,pageNo,dispatch){
    // console.log("fetchData---url : "+url+"?pageNo="+pageNo);
    Axios.get(url,{
        params: {
            themeName: themeName,
            pageNo: pageNo
        }
    }).then(({data}) => {
        if(data.code === 200){
            dispatch(themeLoadDataFinish(
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

function fetchMoreData(url,themeName,pageNo,dispatch){
    // console.log("fetchMoreData---url : "+url+"?pageNo="+pageNo);
    Axios.get(url,{
        params: {
            themeName: themeName,
            pageNo: pageNo
        }
    }).then(({data}) => {
        if(data.code === 200){
            dispatch(themeLoadMoreFinish(
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