import { useState, useEffect } from "react"


function useFetch(url) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)



    useEffect(() => {
        fetch(url).then((res) => {

            if (!res.ok) {
                throw Error("Could not load products please try again")
            }
            return res.json()
        })
            .then((data) => { setData(data.products); setLoading(false) })
            .catch((err) => { setError(err.message); setLoading(false) })

    }, [url])

    return { data, loading, error }

}

export default useFetch