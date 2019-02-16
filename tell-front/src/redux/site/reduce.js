import {
    SITE_LOAD_DATA_START,
    SITE_LOAD_DATA_FINISH,
    SITE_LOAD_MORE_START,
    SITE_LOAD_MORE_FINISH
} from './action-type';

export function site(state = {
    loading: true, //是否显示加载中
    pageNo: 1, //当前页，默认从第一页开始
    hasMore: false, //是否有下一页的数据
    article: [], //存放文章对象的数组
    scrollPosition: 0
},action) {
    switch (action.type) {
        case SITE_LOAD_DATA_START:
            return {
                ...state,
                loading: true,
                hasMore: false,
                article: []
            }
        case SITE_LOAD_DATA_FINISH:
            return {
                ...state,
                loading: false,
                hasMore: action.data.hasMore,
                pageNo: action.data.pageNo,
                article: action.data.article,
            }
        case SITE_LOAD_MORE_START:
            return {
                ...state,
                loading: true,
                hasMore: false,
            }
        case SITE_LOAD_MORE_FINISH:
            return {
                ...state,
                loading: false,
                hasMore: action.data.hasMore,
                pageNo: action.data.pageNo,
                article: state.article.concat(action.data.article),
            }
        default:
            return state
    }
}