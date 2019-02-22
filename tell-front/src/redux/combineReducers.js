import {combineReducers} from 'redux';

import {index} from './index/reduce';
import {theme} from './theme/reduce';
import {user} from './user/reduce';

export default combineReducers({
    index,
    theme,
    user
})