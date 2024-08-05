import { useCallback, useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { getProductById } from "../components/service/productService";
import { useSelector } from "react-redux";
import { AuthState } from "../components/utils/authSlice";
import cat from './../assets/img/cat1.webp'
import { IconCartPlus } from "../components/icons/IconCartPlus";
import { addToCart, getCartByUserId } from "../components/service/cartService";
import { numformat } from "../components/utils/misc";
import FormInput from "../components/FormInput";
import { toast } from "react-toastify";
import { OverlayContextType } from "../components/Layout";

export const Product = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const user: any = useSelector((state: AuthState) => state.auth ? state.auth.user : {})
    const { id } = useParams();
    const [product, setProduct] = useState(Object)
    const [cart, setCart] = useState(Object)
    const [count, setCount] = useState(1)
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();

    const getProduct = useCallback(async () => {
        setLoading(true)
        const item = await getProductById(token!, id!)
        setProduct(item)
        setLoading(false)
        setEmpty(item === undefined)
    }, [setLoading, token, id, setEmpty])

    const getCart = useCallback(async () => {
        setLoading(true)
        let item = await getCartByUserId(token!, user ? user.id : 0)
        if (!item) {
            item = {}
        }
        if (user) {
            item.user = user
        }
        setCart(item)
        setLoading(false)
    }, [setLoading, token, user])

    const addItemToCart = async () => {
        setLoading(true)
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
        setLoading(false)
    }

    const itemsInCart = () => {
        if (!cart?.productItems) {
            return 0
        }
        let itemsIdsInProduct = product?.productItems ? product?.productItems?.map((item: any) => { return item.id }) : []
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
            {product ?
                <div className="rounded-sm flex md:justify-center h-full portrait:flex-col portrait:justify-between landscape:items-center gap-1 portrait:md:w-96">
                    <img src={cat} alt="Cat 1" className="aspect-square landscape:h-96" />
                    <div className="flex flex-col h-[48%] landscape:h-96 portrait:justify-between">
                        <div className="flex flex-col h-[33%] flex-grow landscape:w-96">
                            <div className="flex justify-between portrait:h-7">
                                <div className="font-medium">{product?.name}</div>
                                <div>{product?.productItems?.length > 0 ? product?.productItems?.length + " left" : "Out of stock"} </div>
                            </div>
                            <div className="flex justify-between portrait:h-7">
                                <div className="font-normal">{product.brand?.name} | {product?.productType?.name}</div>
                                <div>${numformat(product?.price)}</div>
                            </div>
                            <div className="overflow-y-auto flex flex-grow mb-1">{product?.description}</div>
                        </div>
                        <div className="w-full md:w-96 flex flex-col gap-2 h-20 justify-end">
                            <div className="w-full flex justify-between">
                                <FormInput value={count} id="count" name="count" label="Count" key="count"
                                    type="number" onChange={setCount}
                                    className=" px-0 w-full" />
                                <div>{itemsInCart()} in cart</div>
                            </div>
                            <button className="btn-hollow h-10 py-2 px-2 w-full flex justify-center gap-2" disabled={product?.productItems?.length <= 0} onClick={addItemToCart}>
                                <IconCartPlus className="w-4 h-4 icon" /> <div className="text-inherit whitespace-nowrap">Add to cart</div>
                            </button>
                        </div>
                    </div>
                </div>
                :
                <div>
                    Product not found
                </div>
            }
        </div>
    )
}