import { ReactNode } from "react"
import { IconSpinner } from "./icons/IconSpinner"

export const LoadingOverlay = ({
    children,
    loading,
    empty,
    className
}: {
    children?: ReactNode
    loading?: boolean
    empty?: boolean
    className?: string
}) => {
    // const loading = useSelector((state: OverlayState) => state.loading)
    // const empty = useSelector((state: OverlayState) => state.empty)

    return (
        <>
            <div className={`w-full h-full ${className}`}>
                {loading ?
                    <div className={`w-full h-full flex items-center justify-center`}>
                        <IconSpinner className="w-14" />
                    </div>
                    : empty ?
                        <div className="w-full h-full flex items-center justify-center">
                            <div>No data found</div>
                        </div>
                        : !children && <div>Page error, contact administrator</div>
                }
                <div className={`w-full h-full ${!loading && !empty && children ? 'block' : 'hidden'}`}>{children}</div>
            </div>
        </>
    )
}