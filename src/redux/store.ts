import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { State, reducer } from "./reducers/rootReducer";

const store = createStore<State, any, any, any>(reducer, applyMiddleware(thunk));

export default store;