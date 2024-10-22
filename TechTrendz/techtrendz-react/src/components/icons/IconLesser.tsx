import { MouseEventHandler } from "react"

export const IconLesser = ({
    className,
    onClick
}: {
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}) => {
    return (
        <div className={`icon ${className}`} onClick={onClick}>
            <svg className={`fill-inherit`} width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M74.4828 0L80 8.75318L21.9035 40L80 71.2468L74.4828 80L0 40L74.4828 0Z" />
            </svg>
        </div>
    )
}