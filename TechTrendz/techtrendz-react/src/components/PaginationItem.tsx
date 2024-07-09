export const PaginationItem = ({
    page,
    active,
    setPage
}: {
    page: number,
    active: boolean,
    setPage: Function
}) => {
    return (
        <>
            <div className={`flex cursor-pointer ${active ? 'border rounded-md px-1' : ''}`}>
                {page < 0 ?
                    <div>...</div> :
                    <div onClick={() => { setPage(page - 1) }}>{page}</div>}
            </div>
        </>
    )
}