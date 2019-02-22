import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import './index.css';
import store from './store/store';
import DefaultLayout from './componetns/layout/DefaultLayout';
import IndexHome from './componetns/home/index';
import ArticleHome from './componetns/article/index';
import ThemeHome from './componetns/theme/index';
import ThemeDetailHome from './componetns/theme/detail/index';
import UserDetailHome from './componetns/user/index';
import About from './componetns/about/index';
import NotFound from './componetns/error/notFound';
import Create from './componetns/article/create7';
import Settings from './componetns/user/settings';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <DefaultLayout exact path='/' component={IndexHome} />
                <DefaultLayout path='/channel/:channelName' component={IndexHome} />
                <DefaultLayout path='/themes' component={ThemeHome} />
                <DefaultLayout path='/article/:id' component={ArticleHome} />
                <DefaultLayout path='/theme/:themeName' component={ThemeDetailHome} />
                <DefaultLayout path='/user/:username' component={UserDetailHome} />
                <DefaultLayout path='/settings' component={Settings} />
                <DefaultLayout path='/about' component={About} />
                <DefaultLayout path='/create' component={Create} />
                <DefaultLayout component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);