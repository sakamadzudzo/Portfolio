import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../components/utils/productService";
import { useSelector } from "react-redux";
import { AuthState } from "../components/utils/authSlice";
import cat from './../assets/img/cat1.webp'
// import { ProductStatus } from "../components/utils/misc";
import IconCartPlus from "../components/icons/IconCartPlus";
// import { numformat } from "../components/utils/misc";

export const Product = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const { id } = useParams();
    const [product, setProduct] = useState(Object)

    const getProduct = useCallback(async () => {
        const item = await getProductById(token!, id!)
        setProduct(item)
    }, [token, id])

    const numformat = (num: number) => {
        let result = "";
        if (num) {
            result = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // result = result.toString().replace(/[^0-9]/g, "");
        }
        return result;
    }

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
                    <div className="h-full w-full flex flex-col justify-between overflow-hidden">
                        <div className="rounded-sm flex md:justify-center h-[90%]">
                            <div className="flex flex-col gap-1 md:w-96">
                                <img src={cat} alt="Cat 1" className="aspect-square" />
                                {/* <ProductStatus product={product} /> */}
                                <div className="flex justify-between">
                                    <div className="font-medium">{product?.name}</div>
                                    <div>{product?.productItems?.length > 0 ? product?.productItems?.length + "left" : "Out of stock"} </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-normal">{product.brand?.name} | {product.productType?.description}</div>
                                    <div>${numformat(product.price)}</div>
                                </div>
                                <div className="overflow-y-auto">{product.description}</div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="btn-hollow h-10 py-2 px-2 w-full md:w-96 flex gap-2" disabled={product?.productItems?.length <= 0}>
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