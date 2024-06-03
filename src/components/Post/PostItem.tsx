import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-solid-svg-icons/faClock";
import {Post} from "../../models/Post.ts";
import {FC} from "react";

interface PostItemProps {
    post: Post;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
    return (
        <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
            <a href="#" className="block rounded-md overflow-hidden">
                <img src={post.image}
                     className="w-full h-60 object-cover transform hover:scale-110 transition duration-500" alt={""}/>
            </a>
            <div className="mt-3">
                <a href="#">
                    <h2
                        className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                        {post.title}
                    </h2>
                </a>
                <div className="mt-2 flex space-x-3">
                    <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <FontAwesomeIcon icon={faUser}/>
                                    </span>
                        {post.createdBy}
                    </div>
                    <div className="flex text-gray-400 text-sm items-center">
                                    <span className="mr-2 text-xs">
                                        <FontAwesomeIcon icon={faClock}/>
                                    </span>
                        {post.createdAt}
                    </div>
                </div>
            </div>
        </div>
    )
}