import React, {Component} from 'react';
import store from './common/store';
import history from './common/historyCommon';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './styles/index.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' exact={true} element={<div>
                                tuantest
                            </div>}>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App
