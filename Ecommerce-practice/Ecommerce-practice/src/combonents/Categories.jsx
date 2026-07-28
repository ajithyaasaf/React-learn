import { useState } from "react"
import mens from "../assets/products/men.png"
import styles from "../css/Categories.module.css"


function Categories(props) {

    let [initial, setToggle] = useState(false)
    const [search, setSeach] = useState("")

    const filteredData = props.prod.filter((val) => {
        return val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })

    // for search bar

    return (
        props.available && (
            <>
                <div
                    className={`${styles.switch} ${initial ? styles.on : styles.off}`}
                    onClick={() => setToggle(!initial)}
                >
                    <span className={`${styles.slider} ${initial ? styles.sliderOn : styles.sliderOff}`}></span>
                </div>
                {/* serach bar implementation */}
                <div>
                    <input type="search" name="search bar" placeholder="search products" style={{ marginLeft: "15px", borderRadius: "5px" }}
                        onChange={(e) => { setSeach(e.target.value) }} />
                </div>
                <p>this is your typed value : {search}</p>
                <div style={{ display: "flex" }}>
                    {!initial ? (filteredData.length === 0 ? <p>No products found</p> : filteredData.map((val) => {
                        return (

                            <div className="card" key={val.id} >
                                <div style={{ backgroundColor: "beige", maxHeight: "600px", maxWidth: "300px", margin: "8px", textAlign: "center" }}>
                                    <img src={mens} alt="" style={{ maxHeight: "200px", maxWidth: "200px" }} />
                                    <h1>{val.name}</h1>
                                    <p>this is 100% cottton</p>
                                    <button>shop now</button>
                                </div>
                            </div>

                        )
                    })) : props.prod.map((val) => {
                        return (

                            <div className="card" key={val.id} >
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
            </>
        )
    )
}
export default Categories