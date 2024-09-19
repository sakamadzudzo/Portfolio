import { ChangeEvent, useEffect, useState } from "react";
import { IconClose } from "./icons/IconClose";

const FilePicker = ({
    className,
    label,
    autoFocus,
    onChange,
    removeFile,
    id,
    name,
    disabled,
    multiple,
    returnEvent,
    values
}: {
    className?: string
    label?: string
    autoFocus?: boolean
    onChange: (files: FileList | null | ChangeEvent<HTMLInputElement>) => void
    removeFile?: Function
    id: string,
    name?: string,
    disabled?: boolean,
    multiple?: boolean,
    returnEvent?: boolean,
    values?: FileList
}) => {
    const [caption, setCaption] = useState("Choose files...")

    useEffect(() => {
        setCaption(values ? `${values.length} files selected` : "Choose files...")
    }, [values])

    return (
        <div className={`relative border border-t-0 rounded-tl-none borders bg-transparent rounded-md px-3 focus:border-light-600 dark:focus:border-dark-600 focus-within:dark:text-dark-600 focus-within:text-light-600 ${className}`}>
            <input
                className={`hidden`}
                autoFocus={autoFocus}
                onChange={(e) => returnEvent ? onChange(e) : onChange((e.target as HTMLInputElement).files)}
                id={id}
                name={name}
                type="file"
                disabled={disabled}
                multiple={multiple}
                accept="video/*,image/*"
            />
            <div className={`mb-1 border-b cursor-pointer hover:font-normal`} onClick={() => { document.getElementById(id!)?.click() }}>
                {caption}
            </div>
            <div className="absolute -top-3 left-0.5 text-xs focus:italic text-inherit">{label}</div>
            {(values && values instanceof FileList) && <div className="w-full grid grid-cols-4 gap-0.5">
                {Array.from(values).map((val, index) =>
                    <>
                        {index < 7 &&
                            <div className="w-full relative">
                                {val.type.includes("image") ?
                                    <img
                                        src={URL.createObjectURL(val)}
                                        alt={`media-${val.name}`}
                                        className="w-full h-full object-fill"
                                    />
                                    :
                                    <video controls className="w-full h-full object-contain">
                                        <source src={URL.createObjectURL(val)} type={val.type} />
                                        Your browser does not support the video tag.
                                    </video>
                                }
                                <div className="absolute top-0 right-0 icon h-4 aspect-square hover:h-5" onClick={() => { removeFile && removeFile(index) }}>
                                    <IconClose />
                                </div>
                            </div>
                        }
                    </>
                )}
                {values.length > 7 && <div className="flex justify-center items-center">
                    +{values.length - 7}
                </div>}
            </div>}
        </div>
    );
};

export default FilePicker;
