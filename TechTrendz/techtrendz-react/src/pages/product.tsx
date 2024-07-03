import { useSelector } from "react-redux";
import { getProductAllPaged } from "../components/utils/productService";
import { AuthState } from "../components/utils/authSlice";

const Product = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    
    const products = getProductAllPaged(token!)
    console.log(products)

    return (
        <div className="wrapper">
            Products here + data size is:
        </div>
    )
}

export default Product;