import { ChangeEvent, useEffect, useId, useState } from "react";
import { MediaPreview } from "./MediaPreview";

export enum FilePickerAcceptTypes {
    Video = 'video/*',
    Image = 'image/*',
    Audio = 'audio/*'
}

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
    values,
    accepts
}: {
    className?: string
    label?: string
    autoFocus?: boolean
    onChange: (files: FileList | null | ChangeEvent<HTMLInputElement>) => void
    removeFile?: Function
    id?: string,
    name?: string,
    disabled?: boolean,
    multiple?: boolean,
    returnEvent?: boolean,
    values?: FileList,
    accepts: FilePickerAcceptTypes[]
}) => {
    const [caption, setCaption] = useState("Choose files...")
    const randomId = useId()
    const [accept, setAccept] = useState("video/*,image/*")

    const handleRemoveFile = (index: number) => {
        // Reset the input to allow uploading the same file again
        const inputElement = document.getElementById(id ? id : randomId) as HTMLInputElement;
        if (inputElement) {
            inputElement.value = ''; // Reset the input
        }
        removeFile && removeFile(index);
    };

    useEffect(() => {
        setCaption(values && values.length ? `${values.length} files selected` : "Choose files...")
    }, [values])

    useEffect(() => {
        setAccept(accepts ? accepts.join(",") : "video/*,image/*")
    }, [accepts])

    return (
        <div className={`relative border border-t-0 rounded-tl-none borders bg-transparent rounded-md px-3 focus:border-light-600 dark:focus:border-dark-600 focus-within:dark:text-dark-600 focus-within:text-light-600 ${className}`} key="filePickerInputContainer">
            <input
                className={`hidden`}
                autoFocus={autoFocus}
                onChange={(e) => { returnEvent ? onChange(e) : onChange((e.target as HTMLInputElement).files); }}
                id={id ? id : randomId}
                name={name}
                type="file"
                disabled={disabled}
                multiple={multiple}
                accept={accept}
                key="filePickerInput"
            />
            <div className={`mb-1 border-b cursor-pointer hover:font-normal`} onClick={() => { document.getElementById(id ? id : randomId)?.click() }} key="filePickerCaption">
                {caption}
            </div>
            <div className="absolute -top-3 left-0.5 text-xs focus:italic text-inherit" key="filePickerLabel">{label}</div>
            <MediaPreview id={`${id}-priview-id`} onClose={(index: number) => { handleRemoveFile(index) }} key={`${id}-priview-id`} label={``} name={`${id}-priview-id`} values={values} closeAction />
        </div>
    );
};

export default FilePicker;
