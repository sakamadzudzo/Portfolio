import { MouseEventHandler } from "react"

export const IconMinus = ({
    className,
    onClick
}: {
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}) => {
    return (
        <div className={`icon ${className}`} onClick={onClick}>
            <svg className={`fill-inherit`} width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 72C22.36 72 8 57.64 8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72ZM40 0C34.7471 0 29.5457 1.03463 24.6927 3.04482C19.8396 5.05501 15.4301 8.00139 11.7157 11.7157C4.21427 19.2172 0 29.3913 0 40C0 50.6087 4.21427 60.7828 11.7157 68.2843C15.4301 71.9986 19.8396 74.945 24.6927 76.9552C29.5457 78.9654 34.7471 80 40 80C50.6087 80 60.7828 75.7857 68.2843 68.2843C75.7857 60.7828 80 50.6087 80 40C80 34.7471 78.9654 29.5457 76.9552 24.6927C74.945 19.8396 71.9986 15.4301 68.2843 11.7157C64.5699 8.00139 60.1604 5.05501 55.3073 3.04482C50.4543 1.03463 45.2529 0 40 0ZM20 44H60V36H20" />
            </svg>
        </div>
    )
}