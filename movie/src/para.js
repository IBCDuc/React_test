import { useContext, useEffect, useReducer, useState } from 'react'
import {Context}   from './ThemeContext'
function Paragrap() {
    const attr = useContext(Context)
    return (
        <p className={attr.theme}>dong chu doi mau</p>
    )
}


export default Paragrap

