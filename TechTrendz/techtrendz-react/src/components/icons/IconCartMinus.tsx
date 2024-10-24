import { MouseEventHandler } from "react"

export const IconCartMinus = ({
    className,
    onClick
}: {
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}) => {
    return (
        <div className={`icon ${className}`} onClick={onClick}>
            <svg className={`fill-inherit`} width="100%" height="100%" viewBox="0 0 80 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.7015 16V8H27.8607V16M23.8806 64C19.5025 64 15.9204 67.6 15.9204 72C15.9204 76.4 19.5025 80 23.8806 80C28.2587 80 31.8408 76.4 31.8408 72C31.8408 67.6 28.2587 64 23.8806 64ZM63.6816 64C59.3035 64 55.7214 67.6 55.7214 72C55.7214 76.4 59.3035 80 63.6816 80C68.0597 80 71.6418 76.4 71.6418 72C71.6418 67.6 68.0597 64 63.6816 64ZM24.6766 51.2V50.8L28.2587 44H57.7114C60.4975 44 63.2836 42.4 64.4776 40L80 12L73.2338 8L57.7114 36H29.8507L13.1343 0H0V8H7.9602L22.2886 38.4L16.7164 48C16.3184 49.2 15.9204 50.4 15.9204 52C15.9204 56.4 19.5025 60 23.8806 60H71.6418V52H25.4726C25.0746 52 24.6766 51.6 24.6766 51.2Z" />
            </svg>
        </div>
    )
}