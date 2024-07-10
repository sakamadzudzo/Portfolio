// import FormInput from "./FormInput"
import { PaginationItem } from "./PaginationItem"

export const Pagination = ({
    first,
    last,
    size,
    offset,
    entries,
    total,
    pages,
    currentPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    setSize,
    setPage,
    setName
}: {
    first: boolean,
    last: boolean,
    size: number,
    offset: number,
    entries: number,
    total: number,
    pages: number,
    currentPage: number,
    nextPage: Function,
    prevPage: Function,
    firstPage: Function,
    lastPage: Function,
    setSize: Function,
    setPage: Function,
    setName: Function
}) => {
    let items = []
    let firstEllipsis = false
    let lastEllipsis = false
    for (let count = 1; count <= pages; count++) {
        // for (let count = 1; count <= 10; count++) {
        if (currentPage - count > 2) {
            if (!firstEllipsis) {
                items.push(
                    <PaginationItem key={-1} page={-1} active={false} setPage={setPage} />
                )
            }
            firstEllipsis = true
        } else if (count - currentPage > 2) {
            if (!lastEllipsis) {
                items.push(
                    <PaginationItem key={-2} page={-2} active={false} setPage={setPage} />
                )
            }
            lastEllipsis = true
        } else {
            items.push(
                <PaginationItem key={count} page={count} active={count === currentPage} setPage={setPage} />
            )
        }
    }

    return (
        <>
            <div className="flex gap-2 justify-center">
                <div>Size: </div>
                <select value={size} onChange={(e: any) => { setSize(e.target.value) }} className="bg-white dark:bg-black -mt-1">
                    <option value={5} label="5" />
                    <option value={10} label="10" />
                    <option value={25} label="25" />
                    <option value={50} label="50" />
                </select>
                <div>{offset} - {entries} of {total}</div>
                <button className={`btn-hollow w-auto h-auto border-0 -mt-0.5`} disabled={first} onClick={() => { firstPage(); }}>&lt;&lt;</button>
                <button className={`btn-hollow w-auto h-auto border-0 -mt-0.5`} disabled={first} onClick={() => { prevPage(); }}>&lt;</button>
                <div className="flex gap-2">{items}</div>
                <button className={`btn-hollow w-auto h-auto border-0 -mt-0.5`} disabled={last} onClick={() => { nextPage(); }}>&gt;</button>
                <button className={`btn-hollow w-auto h-auto border-0 -mt-0.5`} disabled={last} onClick={() => { lastPage(); }}>&gt;&gt;</button>
                {/* <FormInput label="Go to page" key={`go-to`} className="" autoFocus={false} onChange={} value={currentPage.toString()} /> */}
            </div>
            <div className="flex">Sort By: <div onClick={() => { setName(["name"]) }}>Name</div></div>
        </>
    )
}