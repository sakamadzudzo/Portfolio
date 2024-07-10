import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../components/utils/productService";
import { useSelector } from "react-redux";
import { AuthState } from "../components/utils/authSlice";
import cat from './../assets/img/cat1.webp'

export const Product = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const { id } = useParams();
    const [product, setProduct] = useState(Object)

    const getProduct = useCallback(async () => {
        const item = await getProductById(token!, id!)
        setProduct(item)
    }, [token, id])

    useEffect(() => {
        getProduct()
    }, [getProduct, token])

    useEffect(() => {
        document.title = 'TechBrandz - Products';
    }, []);

    return (
        <div className="wrapper p-2 pt-0">
            <div className="h-full w-full">
                {product ?
                    <div>
                        <div>
                            <img src={cat} alt="Cat 1" className="aspect-square py-1" />
                            <div className="font-extrabold">{product?.name}</div>
                            <div className="font-bold">{product.brand?.name}</div>
                            <div className="font-semibold">{product.productType?.description}</div>
                            <div>{product.description}</div>
                        </div>
                        <div>
                            {/* <div>Brand</div> */}
                            {/* <div>{product.brand.name}</div> */}
                        </div>
                    </div> :
                    <div>
                        Product not found
                    </div>}
            </div>
        </div>
    )
}