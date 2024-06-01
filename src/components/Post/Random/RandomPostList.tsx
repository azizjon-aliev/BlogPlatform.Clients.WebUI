import {RandomPostItem} from "./RandomPostItem.tsx";

export const RandomPostList = () => {
    return (
        <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Случайние посты</h3>
            <div className="space-y-4">
                <RandomPostItem />
                <RandomPostItem />
                <RandomPostItem />
            </div>
        </div>
    )
}