import { createContext } from 'react'
import logger from './logger'
// provider
import Context from './Context'
import reducer, { initState } from './reducer'
import { useReducer } from 'react'
function ThemeContext( { children } ) {

    const [state, dispatch] = useReducer(logger(reducer), initState)
    return (
        <Context.Provider value = {[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default ThemeContext