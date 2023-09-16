import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [dataUrl, setDataUrl] = useState(url);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true);
        fetch(url,
            { signal: abortController.signal }
        )
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Request aborted');
                }
            })
            .finally(() => setLoading(false));

        return () => abortController.abort();
    }, [])

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError('Request aborted');
        }
    }

    return {
        data,
        loading,
        error,
        handleCancelRequest,
        setDataUrl
    };
}