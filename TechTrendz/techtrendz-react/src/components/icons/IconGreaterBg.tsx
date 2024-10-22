import { MouseEventHandler } from "react"

export const IconGreaterBg = ({
    className,
    onClick
}: {
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}) => {
    return (
        <div className={`icon ${className}`} onClick={onClick}>
            <svg className={`fill-inherit`} width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.9333 19.6L53.3333 40L32.9333 60.4444L26.6667 54.1333L40.8 40L26.6667 25.8667M8.88889 0C3.95556 0 0 4 0 8.88889V71.1111C0 73.4686 0.936505 75.7295 2.60349 77.3965C4.27049 79.0635 6.53141 80 8.88889 80H71.1111C73.4686 80 75.7295 79.0635 77.3965 77.3965C79.0635 75.7295 80 73.4686 80 71.1111V8.88889C80 6.53141 79.0635 4.27049 77.3965 2.60349C75.7295 0.936505 73.4686 0 71.1111 0H8.88889Z" />
            </svg>
        </div>
    )
}