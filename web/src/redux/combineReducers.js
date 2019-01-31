import {combineReducers} from 'redux';

import {index} from './index/reduce';
import {theme} from './theme/reduce';
import {site} from './site/reduce';
import {user} from './user/reduce';
//import {getUser} from './user/reduce';

export default combineReducers({
    index,
    theme,
    site,
    user
})