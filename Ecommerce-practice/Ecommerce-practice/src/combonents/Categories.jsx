import mens from "../assets/products/men.png"


function Categories(props) {

    return (
        <div style={{ display: "flex" }}>
            {props.prod.map((val) => {
                return (

                    <div className="card" >
                        <div style={{ backgroundColor: "beige", maxHeight: "600px", maxWidth: "300px", margin: "8px", textAlign: "center" }}>
                            <img src={mens} alt="" style={{ maxHeight: "200px", maxWidth: "200px" }} />
                            <h1>{val.name}</h1>
                            <p>this is 100% cottton</p>
                            <button>shop now</button>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default Categories