import { useState } from "react"
import mens from "../assets/products/men.png"
import styles from "../css/Categories.module.css"


function Categories(props) {

    let [initial, setToggle] = useState(false)

    return (
        props.available && (
            <>
                <div
                    className={`${styles.switch} ${initial ? styles.on : styles.off}`}
                    onClick={() => setToggle(!initial)}
                >
                    <span className={`${styles.slider} ${initial ? styles.sliderOn : styles.sliderOff}`}></span>
                </div>

                <div style={{ display: "flex" }}>
                    {props.prod.map((val) => {
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