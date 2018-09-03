import defaultState from './defaultState';

const userReducer = (state = defaultState.user, action) => {
    switch (action.type) {
        case "LOAD_USER_SUCCESS":
            return action.user;
        default:
            return state;
    }
}

export default userReducer;