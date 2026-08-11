import { products } from "../data/products"
import { useParams } from "react-router-dom"
function ProductDetails() {
    const { id } = useParams()
    const data = products.filter((val) => {
        return val.id == id
    })
    return (
        <>
            {data.map((val) => {
                return (
                    <p>{val.name}</p>
                )
            })

            }

        </>
    )
}

export default ProductDetails