import {TagItem} from "./TagItem.tsx";

export const TagList = () => {
    return (
        <div className="w-full bg-white shadow-sm rounded-sm p-4  mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Теги</h3>
            <div className="flex items-center flex-wrap gap-2">
                <TagItem />
                <TagItem />
                <TagItem />
                <TagItem />
                <TagItem />
                <TagItem />
                <TagItem />
                <TagItem />
            </div>
        </div>
    )
}