import {FC} from "react";
import {Post} from "../../models/Post.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons/faClock";
import {faUser} from "@fortawesome/free-solid-svg-icons";

interface BigPostProps {
    post: Post
}

export const BigPost: FC<BigPostProps> = (props) => {
    return (
        <div className="rounded-sm overflow-hidden bg-white shadow-sm">
            <a href="/categories/" className="block rounded-md overflow-hidden">
                <img src={props.post.image}
                     className="w-full h-96 object-cover transform hover:scale-110 transition duration-500"
                     alt={"post"}/>
            </a>
            <div className="p-4 pb-5">
                <a href="view.html">
                    <h2
                        className="block text-2xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                        {props.post.title}
                    </h2>
                </a>

                <p className="text-gray-500 text-sm mt-2">
                    {props.post.content}
                </p>
                <div className="mt-3 flex space-x-4">
                    <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-2 text-xs">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                        {props.post.createdBy}
                    </div>
                    <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-2 text-xs">
                                    <FontAwesomeIcon icon={faClock}/>
                                </span>
                        {props.post.createdAt}
                    </div>
                </div>
            </div>
        </div>
    )
}