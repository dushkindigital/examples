import { combineReducers } from 'redux';

import repos from './repos.reducer';
import user from './user.reducer';

//i had to add this to be able to add text to input 
import { reducer as reducerForm } from 'redux-form';

const rootReducer = combineReducers({
	repos,
    user,
    form: reducerForm
});

export default rootReducer;