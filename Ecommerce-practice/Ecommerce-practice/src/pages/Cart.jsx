import { useOutletContext } from "react-router-dom"


export default function Cart() {
    const { cart, setCart } = useOutletContext()

    return (
        <div style={{ padding: "20px" }}>
            <h2>Cart Items ({cart.length})</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    {cart.map((data, index) => {
                        return (
                            <div
                                key={data.id || index}
                                style={{
                                    border: "1px solid #ddd",
                                    borderRadius: "8px",
                                    padding: "12px",
                                    width: "220px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                                }}
                            >
                                <img
                                    src={data.thumbnail}
                                    alt={data.title}
                                    style={{ width: "120px", height: "120px", objectFit: "contain", marginBottom: "10px" }}
                                />
                                <h4 style={{ margin: "5px 0", fontSize: "16px" }}>{data.title}</h4>
                                <p style={{ margin: "5px 0", fontWeight: "bold", color: "#2e7d32" }}>${data.price}
                                    <p>Qty:{() => { }}</p>
                                </p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}