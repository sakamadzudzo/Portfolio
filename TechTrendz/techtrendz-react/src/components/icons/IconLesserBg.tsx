import { MouseEventHandler } from "react"

export const IconLesserBg = ({
    className,
    onClick
}: {
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}) => {
    return (
        <div className={`icon ${className}`} onClick={onClick}>
            <svg className={`fill-inherit`} width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.0667 19.6L26.6667 40L47.0667 60.4444L53.3333 54.1333L39.2 40L53.3333 25.8667M71.1111 0C76.0444 0 80 4 80 8.88889V71.1111C80 73.4686 79.0635 75.7295 77.3965 77.3965C75.7295 79.0635 73.4686 80 71.1111 80H8.88889C6.53141 80 4.27049 79.0635 2.60349 77.3965C0.936505 75.7295 0 73.4686 0 71.1111V8.88889C0 6.53141 0.936505 4.27049 2.60349 2.60349C4.27049 0.936505 6.53141 0 8.88889 0H71.1111Z" />
            </svg>
        </div>
    )
}