export const IconSpinner = ({
    className
}: {
    className?: string
}) => {
    return (
        <>
            <div className={`w-8 aspect-square ${className}`}>
                <div className="loader"></div>
            </div>
        </>
    )
}