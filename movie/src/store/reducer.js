import { ADD_STATE_INPUT, DELETE_STATE_INPUT, SET_STATE_INPUT } from "./constant"

const initState = {
    todo: '',
    todos: []
}

function reducer(state, action) {
    switch(action.type) {
        case SET_STATE_INPUT:
            return {
                ...state,
                todo: action.payload
            }
        case ADD_STATE_INPUT:
            
            return {
                ...state,
                todos: [...state.todos, action.payload ],
                todo: ''
            }
        case DELETE_STATE_INPUT:
            let CloneArr = [...state.todos]
            CloneArr.splice(action.payload,1)
            return {
                todos: [...CloneArr]
            }
        default:
            throw new Error('invalid')
    }   
}


export { initState }
export default reducer