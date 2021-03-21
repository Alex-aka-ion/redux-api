import serviceListReducer from "../reducers/serviceList";
import serviceAddReducer from "../reducers/serviceAdd";
import {combineReducers, createStore} from "redux";
import serviceFilterReducer from "../reducers/serviceFilter";

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
    serviceFilter: serviceFilterReducer,
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
