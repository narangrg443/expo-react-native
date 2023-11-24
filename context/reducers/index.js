import {combineReducers} from 'redux';
import counterReducer from './counterReducer';


const myReducer=combineReducers({
  counter:counterReducer,
})

export default myReducer;