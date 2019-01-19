import {
    USER_LOAD_DATA_START,
    USER_LOAD_DATA_FINISH,
    USER_LOAD_MORE_START,
    USER_LOAD_MORE_FINISH,
    GET_USER
} from './action-type';
import Axios from "../../axios/axios";
import {openNotificationWithIcon} from "../../componetns/notification";

//开始加载第一页的文章数据
const userLoadDataStart = () => ({type: USER_LOAD_DATA_START});

//加载第一页的文章数据完毕
const userLoadDataFinish = (data) => ({type: USER_LOAD_DATA_FINISH,data: data});

//开始加载下一页的文章数据
const userLoadMoreStart = () => ({type: USER_LOAD_MORE_START});

//加载下一页的文章数据完毕
const userLoadMoreFinish = (data) => ({type: USER_LOAD_MORE_FINISH,data: data});

const getUserAsyn = (data) => ({type: GET_USER,data: data});

//加载第一页的文章
export const userLoadData = (data) => {
    return dispatch => {
        dispatch(userLoadDataStart());
        fetchData(data.url,data.username,data.pageNo,dispatch);
    }
}

//加载下一页的文章
export const userLoadMore = (data) => {
    return dispatch => {
        dispatch(userLoadMoreStart());
        fetchMoreData(data.url,data.username,data.pageNo,dispatch);
    }
}

//加载用户信息
export const getUser = (data) => {
    return dispatch => {
        fetchUser(data.url,dispatch);
    }
}

function fetchData(url,username,pageNo,dispatch){
    // console.log("fetchData---url : "+url);
    Axios.get(url,{
        params: {
            username: username,
            pageNo: pageNo
        }
    }).then(({data}) => {
        if(data.code === 200){
            dispatch(userLoadDataFinish(
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

function fetchMoreData(url,username,pageNo,dispatch){
    // console.log("fetchMoreData---url : "+url);
    Axios.get(url,{
        params: {
            username: username,
            pageNo: pageNo
        }
    }).then(({data}) => {
        if(data.code === 200){
            dispatch(userLoadMoreFinish(
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

//请求用户信息
function fetchUser(url,dispatch){
    // console.log("fetchUser---url : "+url);
    Axios.get(url).then(({data}) => {
        if(data.code === 200){
            dispatch(getUserAsyn(
                {
                    user: data.detail.avatar,
                }
            ))
        }else{
            {openNotificationWithIcon("error","Error",data.description)}
        }
    }).catch(error => {
        {openNotificationWithIcon("error","Error",error.message)}
    })
}