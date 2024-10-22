import { MouseEventHandler } from "react"

export const IconImage404Bg = ({
    className,
    onClick
}: {
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}) => {
    return (
        <div className={`icon ${className}`} onClick={onClick}>
            <svg className={`fill-inherit`} width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M76 60.8L19.2 4H68C72.4 4 76 7.6 76 12V60.8ZM74.8 80L70.8 76H12C7.6 76 4 72.4 4 68V9.2L0 5.2L5.2 0L80 74.8L74.8 80ZM59.2 64L43.6 48.4L36 58L26 46L12 64H59.2Z" />
            </svg>
        </div>
    )
}