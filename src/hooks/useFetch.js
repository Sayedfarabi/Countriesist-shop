import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [fetchLoading, setFetchLoading] = useState(false)

    useEffect(() => {
        setFetchLoading(true)
        axios.get(url)
            .then(data => setData(data?.data))
            .catch(err => {
                setError(err)
            }).finally(() => {
                setFetchLoading(false)
            })
    }, [url])

    return { data, error, fetchLoading }
}