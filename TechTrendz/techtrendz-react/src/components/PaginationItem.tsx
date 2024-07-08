export const PaginationItem = ({
    page,
    active
}: {
    page: number,
    active: boolean
}) => {
    return (
        <>
            <div className={`flex ${active ? 'border rounded-md px-1' : ''}`}>
                {page < 0 ?
                    <div>...</div> :
                    <div>{page}</div>}
            </div>
        </>
    )
}