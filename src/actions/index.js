import axios from 'axios';

export function loadEvents(userId){
    return(dispatch)=>{
        return axios
        .get(`https://api.github.com/users/${userId}/events/public`)
        .then((response)=>{
            dispatch(loadEventsSuccess(response.data));
        })
        .catch(err => {
            dispatch(loadEventsFailure(err));
        })
        .finally(() => {
            dispatch(goTo('repos'));
        });
    }
}

export function goTo(page){
    return{
        type: "GO_TO_PAGE",
        page
    }
}

export function loadEventsSuccess(repos){
    return{
        type: "LOAD_EVENTS_SUCCESS",
        repos
    }
}


export function loadEventsFailure(error){
    return{
        type: "LOAD_EVENTS_FAILURE",
        error
    }
}

export function loadUser(user) {
	return {
		type: "LOAD_USER_SUCCESS",
		user
	};
}