import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../components/utils/productService";
import { useSelector } from "react-redux";
import { AuthState } from "../components/utils/authSlice";
import cat from './../assets/img/cat1.webp'
import { ProductStatus } from "../components/utils/misc";
import IconCartPlus from "../components/icons/IconCartPlus";

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
        <div className="wrapper">
            <div className="h-full w-full p-3">
                {product ?
                    <div className="h-full w-full flex flex-col justify-between">
                        <div className="border rounded-sm relative">
                            <div className="">
                                <img src={cat} alt="Cat 1" className="aspect-square" />
                                {/* <ProductStatus product={product} /> */}
                                <div className="flex justify-between">
                                    <div className="font-extrabold">{product?.name}</div>
                                    <div>{product?.productItems?.length} left</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">{product.brand?.name} | {product.productType?.description}</div>
                                    <div>${product.price}</div>
                                </div>
                                <div>{product.description}</div>
                            </div>
                        </div>
                        <div>
                            <button className="btn-hollow h-10 py-2 px-2 w-full flex gap-2" disabled={product?.productItems?.length <= 0}>
                                <IconCartPlus className="w-fit h-4 icon" /> <div className="text-inherit">Add to cart</div>
                            </button>
                        </div>
                    </div> :
                    <div>
                        Product not found
                    </div>}
            </div>
        </div>
    )
}