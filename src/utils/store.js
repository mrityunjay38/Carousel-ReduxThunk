import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import slides from '../redux/reducers/slides';

const store  = createStore(combineReducers({
    slides
}), applyMiddleware(thunk));

export default store;