import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import reduce from '../redux/combineReducers';

const middleware = applyMiddleware(thunk,createLogger());

export default createStore(reduce,middleware);