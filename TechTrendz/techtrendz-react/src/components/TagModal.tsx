import { useState } from "react"
import { SelectOption, Tag } from "../types/types"
import { Chip } from "./Chip"
import { Modal } from "./Modal"
import FormSelect from "./FormSelect"
import FormMultiSelect from "./FormMultiSelect"

export const TagModal = ({
    tags,
    setTags,
    numberToShow,
    className,
    edit
}: {
    tags: Tag[],
    setTags: Function,
    numberToShow: number,
    className?: string,
    edit?: boolean
}) => {
    const [editModalShow, setEditModalShow] = useState<boolean>(false)
    const [newTags, setNewTags] = useState<Tag[]>([])

    const tagsToOptions = () => {
        return tags
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => { return { value: item.id, label: item.name, description: item.description } })
    }

    const remainder = () => {
        return tags.length > 0 ? tags.length - (numberToShow) : 0
    }

    const tagsToShow = () => {
        return tags.slice(0, numberToShow)
    }

    return (
        <div className={`w-full ${className}`}>
            {tags.length > 0 ?
                <div className={`w-full flex gap-1 flex-wrap`}>
                    {tagsToShow().length > 0 && tagsToShow().map((tag, index) =>
                        <Chip data={tag.name} tooltip={tag.description} variant={{}} key={tag.id} />
                    )}
                    {remainder() > 0 && <div className={``}>

                        <Chip data={"+" + remainder()} tooltip={"Extra items"} variant={{}} key={"extraItems"} extraItems />
                    </div>}
                </div>
                : <div className={`w-full`}>There are no tags</div>}
            {edit && <button className="underline hover:font-normal" onClick={() => { setEditModalShow(true); }}>Add/Edit</button>}
            {editModalShow && <Modal key={`editTagsModal`} close={setEditModalShow}>
                Modal here
            </Modal>}
            <FormMultiSelect id="testtags" name="testtags" className="w-full" label="Test Tags" onChange={(e: { name: string, value: SelectOption[] }) => { setNewTags(e.value.map((item) => { return { id: Number(item.value), name: item.label, description: item.description! } })) }} values={newTags.map((tag) => {return {value:tag.id, label:tag.name, description:tag.description}})} placeholder="Testing tags..."
                options={tagsToOptions()} clearable={true} searchable={true} disabled={false} autoFocus={false} key={`testtags`} returnEvent={true} />
        </div>
    )
}