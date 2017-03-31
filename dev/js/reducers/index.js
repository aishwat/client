import {combineReducers} from 'redux';
import UsersReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import UserReducer from './reducer-user';
import ShowLoginReducer from './reducer-show-login';
import { reducer as FormReducer } from 'redux-form'

const allReducers = combineReducers({
	users:UsersReducer,
	activeUser:ActiveUserReducer,
	user: UserReducer,
	form: FormReducer,
	showLogin:ShowLoginReducer
});

export default allReducers;