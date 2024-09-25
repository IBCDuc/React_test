import { useContext, useReducer } from "react"
import Context from "./Context"
export const useStore = () => {
    return useContext(Context)
}
