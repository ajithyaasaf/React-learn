import { useState } from "react"
import mens from "../assets/products/men.png"
import styles from "../css/Categories.module.css"

function Categories(props) {
    let [initial, setToggle] = useState(false)
    // search bar
    let [search, setSearch] = useState("")
    // category implementation
    let [category, setCategory] = useState("All")

    // Filter products by inStock toggle, search text, and category selection
    let filteredData = props.prod.filter((val) => {
        const matchesStock = initial ? val.inStock === true : true;
        const matchesSearch = val.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = val.category.toLowerCase() === category.toLowerCase();

        return matchesStock && matchesSearch && matchesCategory;
    });

    return (
        props.available && (
            <>
                <div
                    className={`${styles.switch} ${initial ? styles.on : styles.off}`}
                    onClick={() => setToggle(!initial)}
                >
                    <span className={`${styles.slider} ${initial ? styles.sliderOn : styles.sliderOff}`}></span>
                </div>

                {/* search bar */}
                <input
                    type="search"
                    placeholder="search products"
                    onChange={(e) => { setSearch(e.target.value) }}
                />

                {/* category buttons */}
                <li style={{ listStyle: "none", margin: "auto", padding: "5px", margin: "10px", display: "flex", gap: "10px" }}>
                    {["All", "Electronics", "Footwear"].map((cat) => {
                        return (
                            <button
                                key={cat}
                                style={{ cursor: "pointer" }}
                                onClick={() => setCategory(cat)}
                            >
                                {cat}
                            </button>
                        )
                    })}
                </li>

                <div style={{ display: "flex" }}>
                    {filteredData.length > 0 ? (
                        filteredData.map((val) => {
                            return (
                                <div className="card" key={val.id}>
                                    <div style={{ backgroundColor: "beige", maxHeight: "600px", maxWidth: "300px", margin: "8px", textAlign: "center" }}>
                                        <img src={mens} alt="" style={{ maxHeight: "200px", maxWidth: "200px" }} />
                                        <h1>{val.name}</h1>
                                        <p>this is 100% cottton</p>
                                        <button>shop now</button>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </>
        )
    )
}

export default Categories