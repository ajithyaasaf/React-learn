import employees from "../data/employee"

function Table() {
    return (
        <>
            <div style={{ color: "black" }}>
                {employees.map((data) => {

                    return (
                        <p>{data.name}</p>
                    )
                })}
            </div>
        </>
    )
}

export default Table