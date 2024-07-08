import FormInput from "./FormInput"
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
    lastPage
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
    lastPage: Function
}) => {
    let items = []
    let firstEllipsis = false
    let lastEllipsis = false
    for (let count = 1; count <= pages; count++) {
        // for (let count = 1; count <= 10; count++) {
        if (currentPage - count > 2) {
            if (!firstEllipsis) {
                items.push(
                    <PaginationItem key={-1} page={-1} active={false} />
                )
            }
            firstEllipsis = true
        } else if (count - currentPage > 2) {
            if (!lastEllipsis) {
                items.push(
                    <PaginationItem key={-2} page={-2} active={false} />
                )
            }
            lastEllipsis = true
        } else {
            items.push(
                <PaginationItem key={count} page={count} active={count === currentPage} />
            )
        }
    }

    return (
        <>
            <div className="flex gap-2">
                <div>{offset} - {entries} of {total}</div>
                <button className={`btn-hollow w-auto h-auto border-0 -mt-0.5`} disabled={first} onClick={() => { firstPage(); }}>&lt;&lt;</button>
                <button className={`btn-hollow w-auto h-auto border-0 -mt-0.5`} disabled={first} onClick={() => { prevPage(); }}>&lt;</button>
                <div className="flex gap-2">{items}</div>
                <button className={`btn-hollow w-auto h-auto border-0 -mt-0.5`} disabled={last} onClick={() => { nextPage(); }}>&gt;</button>
                <button className={`btn-hollow w-auto h-auto border-0 -mt-0.5`} disabled={last} onClick={() => { lastPage(); }}>&gt;&gt;</button>
                {/* <FormInput label="Go to page" key={`go-to`} className="" autoFocus={false} onChange={} value={currentPage.toString()} /> */}
            </div>
            <div>Page size: {size}</div>
        </>
    )
}