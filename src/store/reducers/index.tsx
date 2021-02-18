import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export default rootReducer;
