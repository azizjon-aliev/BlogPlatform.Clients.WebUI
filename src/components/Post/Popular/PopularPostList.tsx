import {RandomPostItem} from "./PopularPostItem.tsx";
import {useEffect, useState} from "react";
import {PostShort} from "../../../models/Post.ts";
import {getPopularPosts} from "../../../services/PostService.ts";

export const PopularPostList = () => {
    const [posts, setPosts] = useState<PostShort[]>([])

    useEffect(() => {
        getPopularPosts(5).then(posts => setPosts(posts))
    }, [])

    return (
        <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Популярные посты</h3>
            <div className="space-y-4">
                {posts.map(post => (
                    <RandomPostItem key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}