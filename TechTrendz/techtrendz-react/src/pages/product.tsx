import useFetch from "http-react";
import fetcher from "../components/utils/fetcher";

const Product = () => {
    const { data, loading, error, responseTime } = useFetch('getuserall', {
        // refresh: '30 sec',
        fetcher
    });

    if (loading) return <p>Loading</p>

    if (error) return <p>An error ocurred</p>

    if (error) console.log(error)

    return (
        <div className="wrapper">
            Products here + data size is: {data.length}
        </div>
    )
}

export default Product;