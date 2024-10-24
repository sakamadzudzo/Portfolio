import { MouseEventHandler } from "react"

export const IconMenuClose = ({
    className,
    onClick
}: {
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}) => {
    return (
        <div className={`icon ${className}`} onClick={onClick}>
            <svg className={`fill-inherit`} width="100%" height="100%" viewBox="0 0 80 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4188 46.2305L31.5641 71.1526L25.9132 80L0 40L25.9132 0L31.5641 8.84735L15.4188 33.7695H80V46.2305H15.4188ZM80 2.61682V15.0779H39.6367V2.61682H80ZM80 64.9221V77.3832H39.6367V64.9221H80Z" />
            </svg>
        </div>
    )
}