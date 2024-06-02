import {Tag} from "../../models/Tag.ts";
import {FC} from "react";

interface TagItemProps {
    tag: Tag
}

export const TagItem: FC<TagItemProps> = (props) => {
    return (
        <>
            <a href="#"
               className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">
                {props.tag.name}
            </a>
        </>
    )
}