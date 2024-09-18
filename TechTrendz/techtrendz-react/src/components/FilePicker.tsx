import { ChangeEvent } from "react";

const FilePicker = ({
    className,
    label,
    autoFocus,
    onChange,
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
    id?: string,
    name?: string,
    disabled?: boolean,
    multiple?: boolean,
    returnEvent?: boolean,
    values?: FileList
}) => {
    return (
        <div className={`relative focus-within:dark:text-dark-600 focus-within:text-light-600`}>
            <input
                className={`border border-t-0 rounded-tl-none borders bg-transparent rounded-md px-3 focus:border-light-600 dark:focus:border-dark-600 ${className}`}
                autoFocus={autoFocus}
                onChange={(e) => returnEvent ? onChange(e) : onChange((e.target as HTMLInputElement).files)}
                id={id}
                name={name}
                type="file"
                disabled={disabled}
                multiple={multiple}
            />
            <div className="absolute -top-3 left-0.5 text-xs focus:italic text-inherit">{label}</div>
            {(values && values instanceof FileList) && <div className="w-full grid grid-cols-4">
                {Array.from(values).map((val, index) =>
                    <>
                        {index < 7 &&
                            (val.type.includes("image") ?
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
                            )
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
