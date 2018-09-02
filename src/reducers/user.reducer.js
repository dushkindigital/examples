import defaultState from './defaultState';

const userReducer=(state = defaultState.user, action)=>{
    if(action.type==="USER_GO"){
        return{
            repos:action.user
        }
    } else {
        return {
            state
        }
    }
}

export default userReducer;