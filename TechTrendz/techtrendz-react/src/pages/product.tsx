import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../components/utils/productService";
import { useSelector } from "react-redux";
import { AuthState } from "../components/utils/authSlice";
import cat from './../assets/img/cat1.webp'
// import { ProductStatus } from "../components/utils/misc";
import IconCartPlus from "../components/icons/IconCartPlus";
import { addToCart, getCartByUserId } from "../components/utils/cartService";
import { numformat } from "../components/utils/misc";
import FormInput from "../components/FormInput";
import { toast } from "react-toastify";

export const Product = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const user: any = useSelector((state: AuthState) => state.auth ? state.auth.user : {})
    const { id } = useParams();
    const [product, setProduct] = useState(Object)
    const [cart, setCart] = useState(Object)
    const [count, setCount] = useState(1)

    const getProduct = useCallback(async () => {
        const item = await getProductById(token!, id!)
        setProduct(item)
    }, [token, id])

    const getCart = useCallback(async () => {
        let item = await getCartByUserId(token!, user ? user.id : 0)
        if (!item) {
            item = {}
        }
        if (user) {
            item.user = user
        }
        setCart(item)
    }, [token, user])

    const addItemToCart = async () => {
        // let similar = cart.productItems.filter(item => {item.})
        if (count > 0) {
            let item = await addToCart(token!, product.id, count)
            if (!item) {
                item = {}
            }
            if (!item.user && user) {
                item.user = user
            }
            setCart(item)
            getCart()
            setCount(1)
        } else {
            toast.error("Amount to add to cart cannot be less than zero")
        }
    }

    const itemsInCart = () => {
        if (!cart?.productItems) {
            return 0
        }
        let itemsIdsInProduct = product.productItems.map((item: any) => { return item.id })
        return cart.productItems.filter((item: any) => itemsIdsInProduct.includes(item.id)).length
    }

    useEffect(() => {
        getProduct()
    }, [getProduct])

    useEffect(() => {
        getCart()
    }, [getCart])

    useEffect(() => {
        document.title = 'TechBrandz - Product';
    }, []);

    return (
        <div className="wrapper">
            <div className="h-full w-full p-3">
                {product ?
                    <div className="h-full w-full flex flex-col justify-between overflow-hidden">
                        <div className="rounded-sm flex md:justify-center h-[88%]">
                            <div className="flex flex-col gap-1 md:w-96">
                                <img src={cat} alt="Cat 1" className="aspect-square" />
                                {/* <ProductStatus product={product} /> */}
                                <div className="flex justify-between">
                                    <div className="font-medium">{product?.name}</div>
                                    <div>{product?.productItems?.length > 0 ? product?.productItems?.length + " left" : "Out of stock"} </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-normal">{product.brand?.name} | {product.productType?.description}</div>
                                    <div>${numformat(product.price)}</div>
                                </div>
                                <div className="overflow-y-auto">{product.description}</div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="w-full md:w-96 flex flex-col gap-2">
                                <div className="w-full flex justify-between">
                                    <FormInput value={count} id="count" name="count" label="Count" key="count"
                                        type="number" onChange={setCount}
                                        className=" px-0 w-full" />
                                    <div>{itemsInCart()} in cart</div>
                                </div>
                                <button className="btn-hollow h-10 py-2 px-2 w-full flex gap-2" disabled={product?.productItems?.length <= 0} onClick={addItemToCart}>
                                    <IconCartPlus className="w-fit h-4 icon" /> <div className="text-inherit">Add to cart</div>
                                </button>
                            </div>
                        </div>
                    </div> :
                    <div>
                        Product not found
                    </div>
                }
            </div>
        </div>
    )
}