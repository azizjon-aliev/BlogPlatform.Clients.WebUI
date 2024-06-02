import {RandomPostItem} from "./RandomPostItem.tsx";
import {useEffect, useState} from "react";
import {Post} from "../../../models/Post.ts";
import {getRandomPosts} from "../../../services/PostService.ts";

export const RandomPostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getRandomPosts(3).then((data) => {
            setPosts(data);
        });
    }, []);

    return (
        <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Случайние посты</h3>
            <div className="space-y-4">
                {posts.map((post) => (
                    <RandomPostItem key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}