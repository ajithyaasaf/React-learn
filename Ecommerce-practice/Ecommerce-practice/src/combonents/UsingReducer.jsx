import { useReducer, useState } from "react"

export default function UsingReducer() {

    let [value, setValue] = useState(0)



    return (
        <>

            <button onClick={() => { setValue(value => value + 1) }}>Increment</button>
            <button onClick={() => { setValue(value => value - 1) }}>Decrement</button>
            <button onClick={() => { setValue(0) }}>Reset</button>
            <p>the value is {value}</p>
        </>
    )

}