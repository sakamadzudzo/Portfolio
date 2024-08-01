import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice";
import { useCallback, useEffect, useState } from "react";
import { getCartByUserId } from "../components/service/cartService";
import { numformat } from "../components/utils/misc";

class CartDTO {
    id: number = 0
    name?: string = ""
    description?: string = ""
    brand?: string = ""
    type?: string = ""
    count?: number | null = null
    price: number = 0
    tags?: []
}

export const Cart = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const user: any = useSelector((state: AuthState) => state.auth ? state.auth.user : {})
    const [cart, setCart] = useState(Object)
    const [cartDto, setCartDto] = useState<CartDTO[]>([])

    const showCart = useCallback(async () => {
        if (JSON.stringify(cart) === JSON.stringify({})) {
            setCartDto([])
        } else {
            let cartViews: CartDTO[] = []
            let id = 1;
            if (cart.productItems) {
                cart.productItems.forEach((item: any) => {
                    let itemIndex = cartViews.findIndex((view: CartDTO) => view.name === item?.product?.name)
                    if (itemIndex > -1) {
                        cartViews[itemIndex].count! += 1
                    } else {
                        let cartView = new CartDTO()
                        cartView.id = id
                        cartView.name = item.product?.name
                        cartView.description = item.product?.description
                        cartView.price = item.product?.price
                        cartView.type = item.product?.productType?.name
                        cartView.brand = item.product?.brand?.name
                        // cartView.tags = item.product?.tags
                        cartView.count = 1
                        cartViews.push(cartView)
                    }
                    id += 1
                })
            }
            setCartDto(cartViews)
        }
    }, [cart])

    const getCart = useCallback(async () => {
        let item = await getCartByUserId(token!, user ? user.id : 0)
        if (!item || item === undefined) {
            item = {}
            if (user) {
                item.user = user
            }
        }
        setCart(item)
        showCart()
    }, [showCart, token, user])

    useEffect(() => {
        getCart()
    }, [getCart])

    useEffect(() => {
        document.title = 'TechBrandz - Cart';
    }, []);

    return (
        <div className="wrapper">
            <div className="h-full w-full flex flex-col md:items-start md:w-96 gap-3">
                {cartDto && cartDto.length > 0 ? cartDto.map((item: CartDTO) =>
                    <div className="w-full shadow-inherit shadow-sm rounded-sm p-1" key={item.id}>
                        <div className="flex justify-between">
                            <div className="font-medium">{item.name}</div>
                            <div className="font-normal">${numformat(item.price)}</div>
                        </div>
                        <div className="text-xs font-thin">
                            <div>{item.brand} | {item.type}</div>
                        </div>
                        <div className="text-xs font-thin">
                            <div>{item.count} items in cart</div>
                        </div>
                    </div>
                )
                    :
                    <div className="w-full h-full flex justify-center items-center">
                        Cart is empty
                    </div>
                }
            </div>
        </div>
    )
}