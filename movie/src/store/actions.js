import { SET_STATE_INPUT, ADD_STATE_INPUT, DELETE_STATE_INPUT } from "./constant";

export const set_state_input = payload => ({
    type: SET_STATE_INPUT,
    payload
})

export const add_state_input = payload => ({
    type: ADD_STATE_INPUT,
    payload
})

export const delete_todo_input = payload => ({
    type: DELETE_STATE_INPUT,
    payload
})