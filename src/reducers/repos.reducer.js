import defaultState from './defaultState';

const reposReducer = (state = defaultState.repos, action) => {
    switch (action.type) {
        case "LOAD_EVENTS_SUCCESS":
            return {
                ...state,
                error: null,
                repos: action.repos,
            };
        case "LOAD_EVENTS_FAILURE":
            return {
                ...state,
                repos: defaultState.repos,
                error: action.error,
            }
        default:
            return state;
    }
}

export default reposReducer;