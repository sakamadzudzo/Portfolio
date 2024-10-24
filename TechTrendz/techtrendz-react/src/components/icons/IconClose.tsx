import { MouseEventHandler } from "react"

export const IconClose = ({
    className,
    onClick
}: {
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}) => {
    return (
        <div className={`icon ${className}`} onClick={onClick}>
            <svg className={`fill-inherit`} width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 0C62.12 0 80 17.88 80 40C80 62.12 62.12 80 40 80C17.88 80 0 62.12 0 40C0 17.88 17.88 0 40 0ZM54.36 20L40 34.36L25.64 20L20 25.64L34.36 40L20 54.36L25.64 60L40 45.64L54.36 60L60 54.36L45.64 40L60 25.64L54.36 20Z" />
            </svg>
        </div>
    )
}