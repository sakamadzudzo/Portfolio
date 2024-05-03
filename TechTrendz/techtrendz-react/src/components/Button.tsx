const Button = ({
    className,
    text
}: {
    className?: string
    text?: string
}) => {
    return (
        <div>
            <button className={`button ${className}`}>{text}</button>
        </div>
    )
}

export default Button;