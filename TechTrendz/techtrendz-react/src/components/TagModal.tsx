import { Tag } from "../types/types"
import { Chip } from "./Chip"
import { Modal } from "./Modal"

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
    edit?:boolean
}) => {
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
                {edit && <button>Add/Edit</button>}
        </div>
    )
}