import { getProductAllPaged } from "../components/utils/productService";

const Product = () => {
    const products = getProductAllPaged()
    console.log(products)

    return (
        <div className="wrapper">
            Products here + data size is:
        </div>
    )
}

export default Product;