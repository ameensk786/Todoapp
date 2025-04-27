import { thunk } from "redux-thunk";
import reducerfun from "./Reducers";
import { applyMiddleware, createStore } from "redux";

const store = createStore(reducerfun,applyMiddleware(thunk))

export default store