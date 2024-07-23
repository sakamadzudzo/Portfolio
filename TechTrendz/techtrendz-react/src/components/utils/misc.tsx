export const ProductStatus = ({ product }: { product: any }) => {
    const getStatus = () => {
        let items: any[] = product.productItems
        let free = items ? items.filter(item => item.productStatus.name === "FREE") : [];
        let carted = items ? items.filter(item => item.productStatus.name === "CARTED") : [];
        let orderd = items ? items.filter(item => item.productStatus.name === "ORDERED") : [];
        let purchased = items ? items.filter(item => item.productStatus.name === "PURCHASED") : [];
        if (free.length > 0) {
            return "bg-green-600"
        } else if (carted.length > 0) {
            return "bg-yellow-500"
        }
        else if (orderd.length > 0) {
            return "bg-orange-500"
        }
        else if (purchased.length > 0) {
            return "bg-red-500"
        } else {
            return "bg-gray-700"
        }
    }

    return (
        <div className={`absolute top-3 left-3 w-5 aspect-square rounded-full border-2 border-white dark:border-black ${getStatus()}`}></div>
    )
}

export const numformat = (num: number) => {
    let result = "";
    if (num) {
        result = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return result;
}