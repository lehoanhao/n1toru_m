import {combineReducers} from 'redux';
import kanjiReducer from './kanjiReducer';
const allReducers= combineReducers({
  kanji: kanjiReducer,
});
export default allReducers;