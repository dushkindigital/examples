import { combineReducers } from 'redux';

import repos from './repos.reducer';
import user from './user.reducer';
import page from './page.reducer';

//i had to add this to be able to add text to input 

const rootReducer = combineReducers({
	repos,
    user,
    page,
});

export default rootReducer;