import defaultState from './defaultState';

const reposReducer=(state = defaultState.repos, action)=>{
    if(action.type==="REPO_GO"){
        return{
            repos:action.repos
        }
    } else {
        return {
            state
        }
    }
}

export default reposReducer;