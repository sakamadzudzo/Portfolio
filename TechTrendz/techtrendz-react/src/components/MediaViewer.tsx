import { useId } from "react"
import { IconClose } from "./icons/IconClose"
import { MyFile } from "../types/types"
import { IconImage404 } from "./icons/IconImage404"

export const MediaViewer = ({
    value,
    id,
    label,
    onClose,
    className,
    closeAction
}: {
    value?: MyFile | File,
    id?: string,
    label?: string,
    onClose: Function,
    className?: string,
    closeAction?: boolean
}) => {
    const randomId = useId()

    return (
        <div className={`${className}`}>
            {!value || (!(value instanceof File) && value.url === "") ?
                <IconImage404 className="h-full aspect-square" />
                :
                value.type.includes("image") ?
                    <img
                        key={(id ? id : randomId) + '-image'}
                        src={value instanceof File ? URL.createObjectURL(value) : value.url}
                        alt={`media-${value instanceof File ? value.name : value.id}`}
                        className="w-full h-full object-fill"
                    />
                    :
                    <video controls className="w-full h-full object-contain" key={(id ? id : randomId) + '-video'}>
                        <source src={value instanceof File ? URL.createObjectURL(value) : value.url} type={value.type} key={(id ? id : randomId) + '-videoSource'} />
                        Your browser does not support the video tag.
                    </video>
            }
            {closeAction &&
                <div className="absolute top-0 right-0 h-4 aspect-square hover:h-5" onClick={() => onClose} key={(id ? id : randomId) + '-closeIcon'}>
                    <IconClose key={(id ? id : randomId) + '-closeIconIcon'} className="background rounded-full" />
                </div>
            }
        </div>
    )
}