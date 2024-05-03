const FormInput = ({
    className,
    label
}: {
    className?: string
    label?: string
}) => {
    return <div className="relative">
        <input className={`border borders ${className}`} />
        <div className="absolute -top-3.5 text-xs">{label}</div>
    </div>
}

export default FormInput;