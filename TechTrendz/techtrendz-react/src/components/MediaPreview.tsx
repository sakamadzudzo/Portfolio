import { useId } from "react"
import { IconClose } from "./icons/IconClose"
import { MyFile } from "../types/types"
import { IconImage404 } from "./icons/IconImage404"

export const MediaPreview = ({
    values,
    id,
    name,
    label,
    noFileMsg,
    onClose,
    className,
    closeAction
}: {
    values?: FileList | MyFile[],
    id?: string,
    name?: string,
    label?: string,
    noFileMsg?: string,
    onClose: Function,
    className?: string,
    closeAction?: boolean
}) => {
    const randomId = useId()

    const valToLoop = () => {
        let l: File[] | MyFile[] = [] as MyFile[]
        if (values) {
            l = values instanceof FileList ? Array.from(values) : values
        }
        return l
    }

    return (
        <div className={`${className}`}>
            {(values && (values instanceof FileList || (Array.isArray(values) && values.length))) ?
                <div className="w-full grid grid-cols-4 gap-0.5" key="previewContainer">
                    {valToLoop().map((val: File | MyFile, index: number) =>
                        <div className="w-full" key={`intermediary-container-${index}`}>
                            {index < 7 &&
                                <div className="w-full relative" key={(id ? id : randomId) + '-preview-' + index}>
                                    {!val || (!(val instanceof File) && val.url === "") ?
                                        <IconImage404 className="h-full aspect-square" />
                                        :
                                        val.type.includes("image") ?
                                            <img
                                                key={(id ? id : randomId) + '-image-' + index}
                                                src={val instanceof File ? URL.createObjectURL(val) : val.url}
                                                alt={`media-${val instanceof File ? val.name : val.id}`}
                                                className="w-full h-full object-fill"
                                            />
                                            :
                                            <video controls className="w-full h-full object-contain" key={(id ? id : randomId) + '-video-' + index}>
                                                <source src={val instanceof File ? URL.createObjectURL(val) : val.url} type={val.type} key={(id ? id : randomId) + '-videoSource-' + index} />
                                                Your browser does not support the video tag.
                                            </video>
                                    }
                                    {closeAction &&
                                        <div className="absolute top-0 right-0 h-4 aspect-square hover:h-5" onClick={() => onClose(index)} key={(id ? id : randomId) + '-closeIcon-' + index}>
                                            <IconClose key={(id ? id : randomId) + '-closeIconIcon-' + index} className="background rounded-full" />
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    )}
                    {values.length > 7 && <div className="flex justify-center items-center" key={`extrasContainer`}>
                        +{values.length - 7}
                    </div>}
                </div> :
                <div className="flex justify-center">{noFileMsg}</div>}
        </div>
    )
}