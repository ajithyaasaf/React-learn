import styles from "../css/Navbar.module.css"
import logo from "../../public/assets/logo.png"

function Navbar() {


    return (
        <>

            <div className={styles.mainbox}>
                <div><img src={logo} alt="logo" className={styles.logo} /></div>
                <ul style={{ listStyle: "none", display: "flex", }}>
                    <li>Home</li>
                    <li>about</li>
                    <li>shop</li>
                    <li>contact</li>
                </ul>
            </div>

        </>
    )
}

export default Navbar;