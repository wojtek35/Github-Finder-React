const githubReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
                loading: false
                }

        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                repos: action.payload.repos,
                user: action.payload.user,
                loading: false
            }
        case 'SET_LOADING':
                return {
                    ...state,
                    loading: true,
                }
        default: 
            return state
    }
}

export default githubReducer