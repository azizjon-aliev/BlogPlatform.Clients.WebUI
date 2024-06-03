import {FC} from "react";
import {Post} from "../../models/Post.ts";
import {PostItem} from "./PostItem.tsx";

export interface PostListProps {
    posts: Post[];
}

export const PostList: FC<PostListProps> = ({posts}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {posts.map(post => (
                <PostItem key={post.id} post={post}/>
            ))}
        </div>
    )
}