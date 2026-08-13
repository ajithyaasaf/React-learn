import { useReducer, useState } from "react"

export default function UsingReducer() {

    let [value, setValue] = useState(0)
    let initialState = 0
    let [state, dispatch] = useReducer(reducer, initialState)

    function reducer(state, action) {

        switch (action) {
            case "INCREMENT":
                return state + 1
            case "DECREMENT":
                return state - 1
            case "RESET":
                return state = 0
            default:
                return state
        }
    }


    return (
        <>

            <button onClick={() => { dispatch("INCREMENT") }}>Increment</button>
            <button onClick={() => { dispatch("DECREMENT") }}>Decrement</button>
            <button onClick={() => { dispatch("RESET") }}>Reset</button>
            <p>the value is {state}</p>
        </>
    )

}