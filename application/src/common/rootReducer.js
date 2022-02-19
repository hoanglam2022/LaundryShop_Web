import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import historyCommon from "./historyCommon";
import {reducer as CrudReducer} from "./crud/reducer"
import {reducer as AuthReducer} from "../features/Auth/redux/reducer"
import {reducer as HomeReducer} from "../features/Home/redux/reducer"

const reducerMap = {
    router: connectRouter(historyCommon),
    crud  : CrudReducer,
    auth  : AuthReducer,
    home  : HomeReducer,
};

export default combineReducers(reducerMap);
