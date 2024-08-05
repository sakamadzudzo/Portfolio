import { useSelector } from "react-redux";
import { getProductAllPaged } from "../components/service/productService";
import { AuthState } from "../components/utils/authSlice";
import { useCallback, useEffect, useState } from "react";
import cat from './../assets/img/cat1.webp'
import { Pagination } from "../components/Pagination";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ProductStatus } from "../components/utils/misc";
import { OverlayContextType } from "../components/Layout";

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
    const { setLoading } = useOutletContext<OverlayContextType>();

    const getProducts = useCallback(async () => {
        setLoading(true)
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
        setLoading(false)
    }, [pageNumber, pageSize, setLoading, sortFields, token])

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
        <div className="wrapper">
            <div className="h-full w-full">
                <div className="w-full">
                    <Pagination first={first} last={last} offset={offset} entries={offsetLast} size={pageSize}
                        total={totalElements} pages={totalPages} currentPage={pageNumber + 1} key={`products-pagination`}
                        nextPage={nextPage} prevPage={prevPage} firstPage={firstPage} lastPage={lastPage} setSize={setPageSize}
                        setPage={setPageNumber} setName={setSortFields} />
                </div>
                <div className="w-full h-[95%] md:h-[93.5%] overflow-y-auto">
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-7 h-full">
                        {products && !empty && products.map((product: any) =>
                            <div key={product.id} className={"min:w-30 rounded-sm p-1 hover:dark:bg-white/10 focus:dark:bg-white/10 hover:bg-black/10 focus:bg-black/10 h-fit border relative cursor-pointer"}
                                onClick={() => { openProduct(product.id) }}>
                                <img src={cat} alt="Cat 1" className="aspect-square px-1 py-1" />
                                <div>{product.name}</div>
                                <div className="flex gap-1">
                                    <div className="font-normal">Brand:</div>
                                    <div>{product.brand.name}</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="font-normal">Product:</div>
                                    <div>{product?.productType?.name}</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="font-normal">Price:</div>
                                    <div>${product.price}</div>
                                </div>
                                <ProductStatus product={product} />
                                {/* <div>{product.tags && product.tags.map((tag: any) =>
                                <div key={tag.id}>{tag.name}</div>
                            )}</div> */}
                            </div>
                        )}
                        {empty && <div>No products retrieved</div>}
                    </div>
                </div>
                {/* <div className="w-full">
                    <Pagination first={first} last={last} offset={offset} entries={offsetLast} size={pageSize}
                        total={totalElements} pages={totalPages} currentPage={pageNumber + 1} key={`products-pagination`}
                        nextPage={nextPage} prevPage={prevPage} firstPage={firstPage} lastPage={lastPage} setSize={setPageSize}
                        setPage={setPageNumber} setName={setSortFields} />
                </div> */}
            </div>
        </div>
    )
}

export default Products;