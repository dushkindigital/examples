
const pageReducer = (state = "search", action) => {
    switch (action.type) {
        case "GO_TO_PAGE":
            return action.page;
        default:
            return state;
    }
}

export default pageReducer;