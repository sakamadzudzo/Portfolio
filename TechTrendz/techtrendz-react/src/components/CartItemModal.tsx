import { Modal } from "./Modal";
import Form from "./Form";
import FormBody from "./FormBody";
import FormInput from "./FormInput";
import { useCallback, useEffect, useState } from "react";
import { CartDTO } from "../pages/cart";
import { countProductItemsAvialableByProductId } from "./service/productService";
import { toast } from "react-toastify";
import FormFooter from "./FormFooter";
import { addToCart, subtractFromCart } from "./service/cartService";

export const CartItemModal = ({
    close,
    cartItem,
    token
}: {
    close: Function,
    cartItem: CartDTO,
    token: string
}) => {
    const [newCount, setNewCount] = useState(cartItem.count)
    const [totalItems, setTotalItems] = useState(0)
    const [disableSave, setDisableSave] = useState(false)

    const getTotalItemsCount = useCallback(async () => {
        const count = await countProductItemsAvialableByProductId(token, cartItem.id)
        setTotalItems(count)
    }, [cartItem.id, token])

    const changeCount = (value: number) => {
        setNewCount(value)

        if (Number(value) > totalItems) {
            toast.warning("Not enough items to fullfil request")
            setDisableSave(true)
        } else if (value < 0) {
            toast.warning("Cannot add negative number of items")
            setDisableSave(true)
        } else {
            setDisableSave(false)
        }
    }

    // const changeCartFromModal = () => {
    //     if(newCount > oldCount) {
    //         addToCart with difference
    //     } else {
    //         remove items from cart object
    //         save cart
    //     }
    // }

    const save = async () => {
        let item = null
        if (newCount! > cartItem.count!) {
            item = await addToCart(token!, cartItem.id, newCount! - cartItem.count!)
        } else {
            item = await subtractFromCart(token!, cartItem.id, (cartItem.count! - newCount!))
        }
        if (item) {
            window.location.reload()
        }
    }

    useEffect(() => {
        getTotalItemsCount()
    }, [getTotalItemsCount])

    return (
        <>
            <Modal close={close}>
                <Form className="w-full h-full p-3">
                    <FormBody className="w-full h-full flex justify-center items-center gap-4">
                        <button className="btn-hollow border-0 w-fit" disabled={newCount! <= 0} onClick={() => { setNewCount(0) }}>
                            &lt;&lt;
                        </button>
                        <button className="btn-hollow border-0 w-fit" disabled={newCount! <= 0} onClick={() => { setNewCount(newCount! - 1) }}>
                            &lt;
                        </button>
                        <FormInput value={newCount!} id="newCount" name="newCount" onChange={(value: any) => { changeCount(value) }}
                            className="w-16" label="Quantity" />
                        <button className="btn-hollow border-0 w-fit" disabled={newCount! >= totalItems} onClick={() => { setNewCount(newCount! + 1) }}>
                            &gt;
                        </button>
                        <button className="btn-hollow border-0 w-fit" disabled={newCount! >= totalItems} onClick={() => { setNewCount(totalItems) }}>
                            &gt;&gt;
                        </button>
                    </FormBody>
                    <FormFooter className="justify-end">
                        <button className={`btn-hollow`} onClick={() => { close(false); }}>Cancel</button>
                        <button className={`btn-hollow`} disabled={disableSave} onClick={() => { save(); }}> Save</button>
                    </FormFooter>
                </Form>
            </Modal>
        </>
    )
}