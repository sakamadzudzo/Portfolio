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
            {(values && values instanceof FileList) && <div>
                {Array.from(values).map((val) =>
                    <>
                        {val.type.includes("image") ?
                            <img
                                src={val.arrayBuffer}
                                alt={`media-${val.name}`}
                                className="w-full h-full object-fill"
                            />
                            :
                            <video controls className="w-full h-full object-contain">
                                <source src={val} type={val.type} />
                                Your browser does not support the video tag.
                            </video>
                    }
                    </>
                )}
            </div>}
        </div>
    );
};

export default FilePicker;
