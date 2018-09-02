import axios from 'axios';

export function loadEvents(userId){
    console.log(userId);
    return(dispatch)=>{
        return axios
        .get(`https://api.github.com/users/pdushkin/events`)
        .then((response)=>{
            dispatch(newRepo(response.data));
        })
        .catch(err => {
            throw err;
        });
    }
}

export function newRepo(repos){
    return{
        type:"REPO_GO",
        repos
    }
}

export function loadUser(user) {
	return {
		type: "USER_GO",
		user
	};
}