import { useEffect, useState } from "react"
import mens from "../assets/products/men.png"
import styles from "../css/Categories.module.css"
import { Link } from "react-router-dom"

function Categories(props) {
    let [initial, setToggle] = useState(false)
    // search bar
    let [search, setSearch] = useState("")
    // category implementation
    let [category, setCategory] = useState("All")
    // drop filter
    let [dropFilter, setDropFilter] = useState("default")
    // get products
    let [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
    }, [])

    // Filter products by inStock toggle, search text, and category selection
    let filteredData = products.filter((val) => {
        const matchesStock = initial ? val.inStock === true : true;
        const matchesSearch = val.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category == "All" || val.category.toLowerCase() === category.toLowerCase();

        return matchesStock && matchesSearch && matchesCategory;
    });

    // Way 1: Sort filteredData using switch(dropFilter)
    let sortedData = [...filteredData];
    switch (dropFilter) {
        case "lowToHigh":
            sortedData.sort((a, b) => {
                const priceA = Number(a.price.replace(/[^0-9]/g, ''));
                const priceB = Number(b.price.replace(/[^0-9]/g, ''));
                return priceA - priceB;
            });
            break;
        case "highToLow":
            sortedData.sort((a, b) => {
                const priceA = Number(a.price.replace(/[^0-9]/g, ''));
                const priceB = Number(b.price.replace(/[^0-9]/g, ''));
                return priceB - priceA;
            });
            break;
        default:
            break;
    }

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
                {/* search bar */}

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
                {/* category buttons */}

                {/* dropdown filter */}
                <select name="" id="" onChange={(e) => setDropFilter(e.target.value)}>
                    <option value="default" >Default</option>
                    <option value="lowToHigh">Low - High</option>
                    <option value="highToLow">High - Low</option>
                </select>
                {/* dropdown filter */}

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {sortedData.length > 0 ? (
                        sortedData.map((val) => {
                            return (
                                <div className="card" key={val.id}>
                                    <div style={{ backgroundColor: "beige", maxHeight: "600px", maxWidth: "300px", margin: "8px", textAlign: "center" }}>
                                        <img src={val.thumbnail} alt="" style={{ maxHeight: "200px", maxWidth: "200px" }} />
                                        <h1>{val.name}</h1>
                                        <p>price: {val.price}</p>
                                        <p>{val.description}</p>
                                        <button>shop now</button>
                                    </div>
                                    <button style={{ cursor: "pointer" }}><Link style={{ textDecoration: "none", color: "black" }} to={`/products/${val.id}`}>products details</Link></button>
                                    <button>Add to cart</button>
                                </div>
                            )
                        })
                    ) : (
                        <p>No products available</p>
                    )}
                </div >
            </>
        )
    )
}

export default Categories