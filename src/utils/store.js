import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import slides from '../redux/reducers/slides';
import slide from '../redux/reducers/slide';
import player from '../redux/reducers/player';

const store  = createStore(combineReducers({
    slides,
    slide,
    player
}), applyMiddleware(thunk));

export default store;