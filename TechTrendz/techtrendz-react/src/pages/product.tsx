import { useCallback, useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { countProductItemsAvialableByProductId, getProductById } from "../components/service/productService";
import { useSelector } from "react-redux";
import { AuthState } from "../components/utils/authSlice";
import { IconCartPlus } from "../components/icons/IconCartPlus";
import { addToCart, getCartByUserId } from "../components/service/cartService";
import { numformat } from "../components/utils/misc";
import FormInput from "../components/FormInput";
import { toast } from "react-toastify";
import { OverlayContextType } from "../components/Layout";
import { MediaDisplay } from "../components/MediaDisplay";
import { MyFile, Product as ProductObj } from "../types/types";
import { getFileLinkFromMediaId } from "../components/service/fileService";

export const Product = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const user: any = useSelector((state: AuthState) => state.auth ? state.auth.user : {})
    const { id } = useParams();
    const [product, setProduct] = useState<ProductObj>({} as ProductObj)
    const [cart, setCart] = useState(Object)
    const [count, setCount] = useState(1)
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();
    const [totalItems, setTotalItems] = useState(0)
    const [disableSave, setDisableSave] = useState(false)
    const [mediaFiles, setMediaFiles] = useState<MyFile[]>([] as MyFile[])

    const getProduct = useCallback(async () => {
        setLoading(true)
        const item = await getProductById(token!, id!)
        setProduct(item)
        setEmpty(!item)
        setLoading(false)
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

    const getPictureLinks = useCallback(async () => {
        if (product && product.pictures) {
            let picLinks: MyFile[] = [] as MyFile[]
            product.pictures.forEach(async (pic) => {
                picLinks.push({ id: pic.id, token: token!, type: pic.fileType, url: getFileLinkFromMediaId(pic.id) })
            })
            setMediaFiles(picLinks)
        }
    }, [product, token])

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

    const getTotalItemsCount = useCallback(async () => {
        const count = await countProductItemsAvialableByProductId(token!, Number(id))
        setTotalItems(count)
    }, [id, token])

    const changeCount = (value: number) => {
        setCount(value)

        if (Number(itemsInCart()) + Number(value) > totalItems) {
            toast.warning("Not enough items to fullfil request")
            setDisableSave(true)
        } else if (value < 0) {
            toast.warning("Cannot add negative number of items")
            setDisableSave(true)
        } else {
            setDisableSave(false)
        }
    }

    useEffect(() => {
        getTotalItemsCount()
    }, [getTotalItemsCount])

    useEffect(() => {
        getProduct()
    }, [getProduct])

    useEffect(() => {
        getCart()
    }, [getCart])

    useEffect(() => {
        getPictureLinks()
    }, [getPictureLinks])

    useEffect(() => {
        document.title = 'TechBrandz - Product';
    }, []);

    return (
        <div className="wrapper">
            {product ?
                <div className="rounded-sm flex md:justify-center h-full portrait:flex-col portrait:justify-between landscape:items-center gap-1 portrait:md:w-96">
                    <MediaDisplay className="landscape:h-96 portrait:h-1/2 aspect-square" files={mediaFiles} />
                    {/* <div className="landscape:h-96 border aspect-square"></div> */}
                    {/* <img
                        src={cat}
                        alt={`media-cat`}
                        className={`landscape:h-96 border portrait:h-[50%] aspect-square`}
                    /> */}
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
                                    type="number" onChange={(value: any) => { changeCount(value) }}
                                    className=" px-0 w-full" />
                                <div>{itemsInCart()} in cart</div>
                            </div>
                            <button className="btn-hollow h-10 py-2 px-2 w-full flex justify-center gap-2" disabled={product?.productItems?.length <= 0 || disableSave || count <= 0} onClick={addItemToCart}>
                                <IconCartPlus className="w-4 h-4" /> <div className="text-inherit whitespace-nowrap">Add to cart</div>
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