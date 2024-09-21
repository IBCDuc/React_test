import { useEffect, useReducer, useState } from 'react'




const init = {
    job: '',
    jobs: [],
}
const SET_JOB = 'set job'
const ADD_JOB = 'add job'
const DeLETE_JOB = 'delete job'
const ADD_METHOD = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
const SET_METHOD = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const DELETE_METHOD = payload => {
    return {
        type: DeLETE_JOB,
        index: payload
    }

}
const reducer = (state, method) => {
    let newState
    switch (method.type) {
        case SET_JOB:
            newState =  {
                ...state,
                job: method.payload
            }
        break
        case ADD_JOB:
            newState = {
                job: '',
                jobs: [...state.jobs, state.job]
            }
        break
        case DeLETE_JOB:
            const newjob = [...state.jobs]
            newjob.splice(method.index,1)
            newState = {
                ...state,
                jobs: [newjob]
            }
        break
    }




    return newState
}
function Component() {
    const [state, dispatch] = useReducer(reducer, init)
    const { job, jobs } = state
    const handleClick = () => {
        dispatch(ADD_METHOD(job))
    }
    return (
        <div>
            <input
                value={job}
                onChange={(e) => {
                    dispatch(SET_METHOD(e.target.value))
                }}
            
            ></input>

            <button 
                onClick = {handleClick}
            
            >Add</button>
            <ul>
                {jobs.map((item, index) => (
                    <li key = {index}>{item} <span onClick = {() => dispatch(DELETE_METHOD(index))}>xoa</span></li>
                
                ))}
            </ul>

        </div>
    )

}   



export default Component