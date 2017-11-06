import { combineReducers } from 'redux';
import routes from './routes';
import auth from './auth';

export default combineReducers({
  routes,
  auth
});
