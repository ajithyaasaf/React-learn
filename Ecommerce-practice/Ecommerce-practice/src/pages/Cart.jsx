import { useOutletContext } from "react-router-dom"


export default function Cart() {
    const { cart, setCart } = useOutletContext()
    function handleDecrease(id) {
        setCart((prevCart) => {
            return prevCart.map((data) => {
                if (data.id === id) {
                    return { ...data, quantity: data.quantity - 1 }
                } else {
                    return data
                }
            })
        })
    }

    function handleIncrease(id) {
        setCart((prevCart) => {
            return prevCart.map((data) => {
                if (data.id === id) {
                    return { ...data, quantity: data.quantity + 1 }
                } else {
                    return data
                }
            })
        })
    }


    function handleRemove(id) {
        setCart((prevCart) => {
            return prevCart.filter((data) => {
                return data.id != id


            })

        })

    }


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
                                <p style={{ margin: "5px 0", fontWeight: "bold", color: "#2e7d32" }}>${data.price}</p>

                                {/* Quantity Controls Design */}
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "10px 0" }}>
                                    <button
                                        onClick={() => handleDecrease(data.id)}
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "4px",
                                            border: "1px solid #ccc",
                                            backgroundColor: "#f8f9fa",
                                            cursor: "pointer",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        -
                                    </button>

                                    <span style={{ fontSize: "14px", fontWeight: "600", minWidth: "24px", textAlign: "center" }}>
                                        {data.quantity}
                                    </span>

                                    <button
                                        onClick={() => handleIncrease(data.id)}
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "4px",
                                            border: "1px solid #ccc",
                                            backgroundColor: "#f8f9fa",
                                            cursor: "pointer",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Remove Button */}
                                <button
                                    onClick={() => handleRemove(data.id)}
                                    style={{
                                        marginTop: "8px",
                                        padding: "6px 14px",
                                        backgroundColor: "#fee2e2",
                                        color: "#dc2626",
                                        border: "1px solid #fca5a5",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                        fontSize: "13px",
                                        fontWeight: "500",
                                        transition: "background-color 0.2s ease"
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}