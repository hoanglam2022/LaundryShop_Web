import React, {Component} from 'react';
import store from './common/store';
import historyCommon from './common/historyCommon';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import {BrowserRouter} from "react-router-dom";
import AllRoutes from './routes'
import './styles/index.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={historyCommon}>
                    <BrowserRouter>
                        <AllRoutes/>
                    </BrowserRouter>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App
