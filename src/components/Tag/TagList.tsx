import {TagItem} from "./TagItem.tsx";
import {useEffect, useState} from "react";
import {Tag} from "../../models/Tag.ts";
import {getTags} from "../../services/TagService.ts";

export const TagList = () => {
    const [tags, setTags] = useState<Tag[]>([])

    useEffect(() => {
        // Fetch tags from API
        getTags().then((tags) => {
            setTags(tags)
        });
    }, [])


    return (
        <div className="w-full bg-white shadow-sm rounded-sm p-4  mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Теги</h3>
            <div className="flex items-center flex-wrap gap-2">
                {tags.map((tag) => (
                    <TagItem key={tag.id} tag={tag}/>
                ))}
            </div>
        </div>
    )
}