export const IconSpinner = ({
    className
}: {
    className?: string
}) => {
    return (
        <>
            <svg className={`icon stroke-light-50 dark:stroke-dark-50 ${className}`} width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g className="stroke-inherit">
                    <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" strokeLinecap="round" className="stroke-inherit">
                        <animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline"
                            values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1"
                            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite" />
                        <animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline"
                            values="0;-16;-59;-59" keyTimes="0;0.475;0.95;1"
                            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite" />
                    </circle>
                    <animateTransform attributeName="transform" type="rotate" dur="2s"
                        values="0 12 12;360 12 12" repeatCount="indefinite" />
                </g>
            </svg>
        </>
    )
}