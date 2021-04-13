import { combineReducers } from 'redux';
import countReducer from './comentReduser';
import countReduser from './countReduser';
import selectReduser from './seletReduser'
import imgsReduser from './imgsReduser';
const rootReducer = combineReducers({
  coment: countReducer,
  countRarp: countReduser,
  selectStatus: selectReduser, 
  imgs: imgsReduser
})

export default rootReducer
