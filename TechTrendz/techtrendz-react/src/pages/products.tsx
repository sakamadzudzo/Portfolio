import { useSelector } from "react-redux";
import { getProductAllPaged } from "../components/utils/productService";
import { AuthState } from "../components/utils/authSlice";
import { useCallback, useEffect, useState } from "react";
import cat from './../assets/img/cat1.webp'
import { Pagination } from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate()
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [products, setProducts] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [offset, setOffset] = useState(0)
    const [offsetLast, setOffsetLast] = useState(0)
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
            const pageNumber = (pagedProducts.pageable.pageNumber);
            setPageNumber(pageNumber);
            setPageSize(pagedProducts.pageable.pageSize);
            setOffset(pagedProducts.pageable.offset + 1);
            setOffsetLast(pagedProducts.pageable.offset + pagedProducts.numberOfElements);
        }
    }, [pageNumber, pageSize, sortFields, token])

    const getStatus = (status: string) => {
        let colorClass = "bg-green-600";
        if (status === "CARTED") colorClass = "bg-yellow-500"
        if (status === "ORDERED") colorClass = "bg-orange-500"
        if (status === "PURCHASED") colorClass = "bg-red-500"
        return colorClass
    }

    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    const prevPage = () => {
        setPageNumber(pageNumber - 1)
    }

    const firstPage = () => {
        setPageNumber(0)
    }

    const lastPage = () => {
        setPageNumber(totalPages - 1)
    }

    const openProduct = (id: number) => {
        navigate("/product/" + id)
    }

    useEffect(() => {
        getProducts()
    }, [getProducts, token])

    useEffect(() => {
        document.title = 'TechBrandz - Products';
    }, []);

    return (
        <div className="wrapper p-2 pt-0">
            <div className="h-full w-full">
                <div className="w-full">
                    <Pagination first={first} last={last} offset={offset} entries={offsetLast} size={pageSize}
                        total={totalElements} pages={totalPages} currentPage={pageNumber + 1} key={`products-pagination`}
                        nextPage={nextPage} prevPage={prevPage} firstPage={firstPage} lastPage={lastPage} setSize={setPageSize}
                        setPage={setPageNumber} setName={setSortFields} />
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-7 overflow-y-auto h-[95%] md:h-[93.5%]">
                    {products && !empty && products.map((product: any) =>
                        <div key={product.id} className={"min:w-30 rounded-sm p-1 hover:dark:bg-white/10 focus:dark:bg-white/10 hover:bg-black/10 focus:bg-black/10  border relative"}
                            onClick={() => { openProduct(product.id) }}>
                            <img src={cat} alt="Cat 1" className="aspect-square px-1 py-1" />
                            <div>{product.name}</div>
                            <div className="flex gap-1">
                                <div className="font-bold">Brand:</div>
                                <div>{product.brand.name}</div>
                            </div>
                            <div className="flex gap-1">
                                <div className="font-bold">Type:</div>
                                <div>{product.productType.description}</div>
                            </div>
                            <div className={`absolute top-3 left-3 w-4 aspect-square rounded-full ${getStatus(product.productStatus.name)}`}></div>
                        </div>
                    )}
                    {empty && <div>No products retrieved</div>}
                </div>
                <div className="w-full">
                    <Pagination first={first} last={last} offset={offset} entries={offsetLast} size={pageSize}
                        total={totalElements} pages={totalPages} currentPage={pageNumber + 1} key={`products-pagination`}
                        nextPage={nextPage} prevPage={prevPage} firstPage={firstPage} lastPage={lastPage} setSize={setPageSize}
                        setPage={setPageNumber} setName={setSortFields} />
                </div>
            </div>
        </div>
    )
}

export default Products;