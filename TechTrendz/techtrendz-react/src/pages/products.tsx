import { useSelector } from "react-redux";
import { getProductAllPaged } from "../components/utils/productService";
import { AuthState } from "../components/utils/authSlice";
import { useCallback, useEffect, useState } from "react";
import cat from './../assets/img/cat1.webp'

const Products = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [products, setProducts] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [pageSize, setPageSize] = useState(25)
    const [sortFields, setSortFields] = useState(["name"])
    const [totalElements, setTotalElements] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [empty, setEmpty] = useState(true)
    const [first, setFirst] = useState(true)
    const [last, setLast] = useState(true)

    const getProducts = useCallback(async () => {
        const pagedProductsRequestDto = { pageNumber: pageNumber, pageSize: pageSize, sortFields: sortFields, sortDirection: "ASC" }
        const pagedProducts = await getProductAllPaged(token!, pagedProductsRequestDto)
        if (pagedProducts) {
            setProducts(pagedProducts.content);
            setTotalElements(pagedProducts.totalElements)
            setTotalPages(pagedProducts.totalPages)
            setEmpty(pagedProducts.empty)
            setFirst(pagedProducts.first)
            setLast(pagedProducts.last)
        }
        if (pagedProducts.pageable) {
            setPageNumber(pagedProducts.pageable.pageNumber);
            setPageSize(pagedProducts.pageable.pageSize);
        }
    }, [pageNumber, pageSize, sortFields, token])

    useEffect(() => {
        getProducts()
    }, [getProducts, token])

    return (
        <div className="wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 lg:gap-5 p-2">
            {products && products.length > 0 && products.map((product: any) =>
                <div key={product.id} className={"min:w-30 rounded-md p-1 hover:shadow-md shadow-white border"}>
                    <img src={cat} alt="Cat 1" className="aspect-square px-1 py-1" />
                    <div>{product.name}</div>
                    <div className="flex gap-1">
                        <div className="font-bold">Brand:</div>
                        <div>{product.brand.name}</div>
                    </div>
                    <div className="flex gap-1">
                        <div className="font-bold">Type:</div>
                        <div className="lowercase">{product.productType.name}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Products;