import { MouseEventHandler } from "react"

export const IconImage404 = ({
    className,
    onClick
}: {
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}) => {
    return (
        <div className={`icon ${className}`} onClick={onClick}>
            <svg className={`fill-inherit`} width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80 74.8L5.2 0L0 5.2L4 9.2V68C4 72.4 7.6 76 12 76H70.8L74.8 80L80 74.8ZM12 68V17.2L42.4 47.6L36.4 55.2L28 44.4L16 60H54.8L62.8 68H12ZM27.2 12L19.2 4H68C72.4 4 76 7.6 76 12V60.8L68 52.8V12H27.2Z" />
            </svg>
        </div>
    )
}