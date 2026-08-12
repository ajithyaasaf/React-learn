export default function UsingReducer() {

    let [state, dispatch] = useReducer(reducer, initialValue)



    return (
        <>
            <p>the value is {value}</p>
        </>
    )

}