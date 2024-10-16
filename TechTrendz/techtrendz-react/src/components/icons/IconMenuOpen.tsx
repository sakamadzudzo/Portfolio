export const IconMenuOpen = ({
    className
}: {
    className?: string
}) => {
    return (
        <div className={`icon ${className}`}>
            <svg className={`fill-inherit`} width="100%" height="100%" viewBox="0 0 80 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H80V13.3333H0V0ZM0 33.3333H80V46.6667H0V33.3333ZM0 66.6667H80V80H0V66.6667Z" />
            </svg>
        </div>
    )
}