import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice";
import { useCallback, useEffect, useState } from "react";
import { getCartByUserId } from "../components/utils/cartService";

export const Cart = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const user: any = useSelector((state: AuthState) => state.auth ? state.auth.user : {})
    const [cart, setCart] = useState(Object)

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

    useEffect(() => {
        getCart()
    }, [getCart])

    useEffect(() => {
        document.title = 'TechBrandz - Cart';
    }, []);

    return (
        <div className="wrapper p-3">
            <div className="h-full w-full flex flex-col md:items-start md:w-96 gap-3">
                {cart && cart?.productItems ?
                    cart.productItems.map((item: any) =>
                        <div className="w-full flex shadow-inherit shadow-sm rounded-sm p-1" key={item.id}>
                            <div>{item.product.name}</div>
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