import { MouseEventHandler } from "react"

export const IconGreater = ({
    className,
    onClick
}: {
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}) => {
    return (
        <div className={`icon ${className}`} onClick={onClick}>
            <svg className={`fill-inherit`} width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.51724 0L0 8.75318L57.931 40L0 71.2468L5.51724 80L80 40L5.51724 0Z" />
            </svg>
        </div>
    )
}