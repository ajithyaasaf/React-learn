import styles from "../css/Navbar.module.css"
import logo from "../../public/assets/logo.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { cartContext } from "../App"


function Navbar() {

    const { cart } = useContext(cartContext)
    return (
        <>

            <div className={styles.mainbox}>
                <div><img src={logo} alt="logo" className={styles.logo} /></div>
                <ul style={{ listStyle: "none", display: "flex", alignItems: "center", margin: 0, padding: 0 }}>
                    <li><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></li>
                    <li>about</li>
                    <li>shop</li>
                    <li>contact</li>
                    <li>
                        <Link to="/cart" style={{ textDecoration: "none", color: "#2e7d32", fontWeight: "bold" }}>
                            🛒 Cart {(cart.length)}
                        </Link>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Navbar;