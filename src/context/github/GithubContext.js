import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GitHubContext = createContext()

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
        repos: [],
    }

    const [state, dispatch] =  useReducer(githubReducer, initialState)

    return <GitHubContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GitHubContext.Provider>
}

export default GitHubContext